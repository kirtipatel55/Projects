import chalk from 'chalk';
import { mockProfiles, mockCompanies } from './data/mockProfiles.js';
import { processProfile, processCompany } from './utils/dataProcessor.js';

async function simulateCrawler() {
  console.log(chalk.blue('🔍 Starting mock LinkedIn data processor...\n'));

  // Process profiles
  console.log(chalk.yellow('Processing profiles...'));
  const processedProfiles = mockProfiles.map(processProfile);
  processedProfiles.forEach(profile => {
    console.log(chalk.green(`\n✓ Found profile: ${profile.name}`));
    console.log(`  Title: ${profile.title}`);
    console.log(`  Location: ${profile.location}`);
    console.log(`  Mock URL: ${profile.profileUrl}`);
  });

  // Process companies
  console.log(chalk.yellow('\nProcessing companies...'));
  const processedCompanies = mockCompanies.map(processCompany);
  processedCompanies.forEach(company => {
    console.log(chalk.green(`\n✓ Found company: ${company.name}`));
    console.log(`  Industry: ${company.industry}`);
    console.log(`  Location: ${company.headquarters}`);
    console.log(`  Mock URL: ${company.companyUrl}`);
  });

  // Save results
  const results = {
    profiles: processedProfiles,
    companies: processedCompanies,
    summary: {
      totalProfiles: processedProfiles.length,
      totalCompanies: processedCompanies.length,
      timestamp: new Date().toISOString()
    }
  };

  console.log(chalk.blue('\n📊 Processing Summary:'));
  console.log(`Processed ${results.summary.totalProfiles} profiles`);
  console.log(`Processed ${results.summary.totalCompanies} companies`);
}

simulateCrawler().catch(console.error);