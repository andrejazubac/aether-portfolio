const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '..', 'pricing_structure.csv');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'pricingData.ts');

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

try {
  const data = fs.readFileSync(csvPath, 'utf8');
  const lines = data.split(/\r?\n/).filter(line => line.trim() !== '');
  if (lines.length === 0) {
    console.error('Error: CSV file is empty');
    process.exit(1);
  }

  // Parse headers
  const headers = parseCSVLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const rowValues = parseCSVLine(lines[i]);
    if (rowValues.length < headers.length) {
      continue; // Skip malformed or empty rows
    }
    const rowObj = {};
    headers.forEach((h, index) => {
      rowObj[h] = rowValues[index];
    });
    rows.push(rowObj);
  }

  // Group items by Type and language
  const output = {
    en: {
      oneTime: [],
      retainers: [],
      launch: [],
      aLaCarte: []
    },
    sr: {
      oneTime: [],
      retainers: [],
      launch: [],
      aLaCarte: []
    }
  };

  rows.forEach(row => {
    const type = row.Type;
    const indexStr = row.Index;
    const popular = row.Popular && row.Popular.toUpperCase() === 'TRUE';

    // Parse features
    const featuresEn = row.Features_EN ? row.Features_EN.split(';').map(f => f.trim()).filter(Boolean) : [];
    const featuresSr = row.Features_SR ? row.Features_SR.split(';').map(f => f.trim()).filter(Boolean) : [];

    if (type === 'One-Time') {
      output.en.oneTime.push({
        index: indexStr,
        title: row.Title_EN,
        subtitle: row.Subtitle_EN || undefined,
        target: row.Target_EN,
        price: row.Price,
        pricePeriod: row.PricePeriod_EN,
        features: featuresEn,
        cta: row.CTA_EN,
        badge: row.Badge_EN || undefined,
        popular: popular || undefined
      });
      output.sr.oneTime.push({
        index: indexStr,
        title: row.Title_SR,
        subtitle: row.Subtitle_SR || undefined,
        target: row.Target_SR,
        price: row.Price,
        pricePeriod: row.PricePeriod_SR,
        features: featuresSr,
        cta: row.CTA_SR,
        badge: row.Badge_SR || undefined,
        popular: popular || undefined
      });
    } else if (type === 'Retainer') {
      output.en.retainers.push({
        index: indexStr,
        title: row.Title_EN,
        subtitle: row.Subtitle_EN || undefined,
        target: row.Target_EN,
        price: row.Price,
        pricePeriod: row.PricePeriod_EN,
        features: featuresEn,
        cta: row.CTA_EN,
        badge: row.Badge_EN || undefined,
        popular: popular || undefined
      });
      output.sr.retainers.push({
        index: indexStr,
        title: row.Title_SR,
        subtitle: row.Subtitle_SR || undefined,
        target: row.Target_SR,
        price: row.Price,
        pricePeriod: row.PricePeriod_SR,
        features: featuresSr,
        cta: row.CTA_SR,
        badge: row.Badge_SR || undefined,
        popular: popular || undefined
      });
    } else if (type === 'Launch') {
      const id = indexStr === '01' ? 'launch-core' : 'launch-growth';
      output.en.launch.push({
        id: id,
        title: row.Title_EN,
        initialCost: row.Subtitle_EN,
        initialLabel: 'Instead of 500€ creation cost',
        price: row.Price,
        pricePeriod: row.PricePeriod_EN,
        features: featuresEn,
        cta: row.CTA_EN,
        popular: popular || undefined
      });
      output.sr.launch.push({
        id: id,
        title: row.Title_SR,
        initialCost: row.Subtitle_SR,
        initialLabel: 'Umesto 500€ za izradu sajta',
        price: row.Price,
        pricePeriod: row.PricePeriod_SR,
        features: featuresSr,
        cta: row.CTA_SR,
        popular: popular || undefined
      });
    } else if (type === 'A-La-Carte') {
      output.en.aLaCarte.push({
        index: indexStr,
        title: row.Title_EN,
        subtitle: row.Subtitle_EN || undefined,
        target: row.Target_EN,
        price: row.Price,
        pricePeriod: row.PricePeriod_EN,
        features: featuresEn,
        cta: row.CTA_EN,
        badge: row.Badge_EN || undefined,
        popular: popular || undefined
      });
      output.sr.aLaCarte.push({
        index: indexStr,
        title: row.Title_SR,
        subtitle: row.Subtitle_SR || undefined,
        target: row.Target_SR,
        price: row.Price,
        pricePeriod: row.PricePeriod_SR,
        features: featuresSr,
        cta: row.CTA_SR,
        badge: row.Badge_SR || undefined,
        popular: popular || undefined
      });
    }
  });

  const tsCode = `export interface PricingPackage {
  index: string;
  title: string;
  subtitle?: string;
  target: string;
  price: string;
  pricePeriod?: string;
  features: string[];
  cta: string;
  badge?: string;
  popular?: boolean;
}

export interface LaunchPackage {
  id: string;
  title: string;
  initialCost: string;
  initialLabel: string;
  price: string;
  pricePeriod: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingData = {
  en: {
    toggles: {
      oneTime: "One-Time Custom Development",
      boost: "Monthly Business Boost",
      aLaCarte: "A-La-Carte Services",
      monthly: "Monthly",
      yearly: "Yearly (Save 15%)"
    },
    sections: {
      pricingHeader: {
        tag: "Investment Structure",
        title: "Transparent pricing built for performance.",
        description: "Select custom development for a tailored, high-end platform, leverage our monthly support plans, or hire us for individual standalone branding and engineering projects."
      },
      launchHeader: {
        tag: "Elite Partnership Program",
        title: "Aether Launch.",
        subtitle: "Zero € Upfront. Continuous Engineering.",
        description: "We build your premium digital platform with zero initial development cost. Secure your place under a rolling monthly membership covering continuous optimization, enterprise hosting, and technical support. Contract term: 12 months minimum.",
        scarcity: "Limited to 3 clients monthly to preserve premium build quality.",
        statusActive: "Active slots: 1 remaining for this month"
      }
    },
    oneTime: ${JSON.stringify(output.en.oneTime, null, 2)} as PricingPackage[],
    retainers: ${JSON.stringify(output.en.retainers, null, 2)} as PricingPackage[],
    launch: ${JSON.stringify(output.en.launch, null, 2)} as LaunchPackage[],
    aLaCarte: ${JSON.stringify(output.en.aLaCarte, null, 2)} as PricingPackage[]
  },
  sr: {
    toggles: {
      oneTime: "Jednokratni Razvoj",
      boost: "Mesečni Poslovni Boost",
      aLaCarte: "Pojedinačne Usluge",
      monthly: "Mesečno",
      yearly: "Godišnje (Ušteda 15%)"
    },
    sections: {
      pricingHeader: {
        tag: "Investiciona Struktura",
        title: "Transparentne cene kreirane za rast.",
        description: "Izaberite jednokratni razvoj za unikatnu platformu, iskoristite naše mesečne pakete ili nas angažujte za pojedinačne usluge dizajna i programiranja."
      },
      launchHeader: {
        tag: "Elitni Program Partnerstva",
        title: "Aether Launch.",
        subtitle: "0€ Inicijalno. Kontinualni Inženjering.",
        description: "Izrađujemo vašu premium digitalnu platformu bez ikakvih početnih troškova razvoja. Obezbedite mesto uz mesečnu članarinu koja pokriva optimizaciju, hosting i tehničku podršku. Minimalno trajanje ugovora: 12 meseci.",
        scarcity: "Ograničeno na 3 klijenta mesečno kako bismo zadržali premium kvalitet izrade.",
        statusActive: "Aktivna mesta: još 1 preostalo za ovaj mesec"
      }
    },
    oneTime: ${JSON.stringify(output.sr.oneTime, null, 2)} as PricingPackage[],
    retainers: ${JSON.stringify(output.sr.retainers, null, 2)} as PricingPackage[],
    launch: ${JSON.stringify(output.sr.launch, null, 2)} as LaunchPackage[],
    aLaCarte: ${JSON.stringify(output.sr.aLaCarte, null, 2)} as PricingPackage[]
  }
};
`;

  fs.writeFileSync(outputPath, tsCode, 'utf8');
  console.log('Successfully compiled pricing CSV to src/data/pricingData.ts');
} catch (err) {
  console.error('Error compiling pricing CSV:', err.message);
  process.exit(1);
}
