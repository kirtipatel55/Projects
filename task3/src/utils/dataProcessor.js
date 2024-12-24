export function processProfile(profile) {
  return {
    ...profile,
    processedAt: new Date().toISOString(),
    profileUrl: `https://mock-linkedin.com/in/${profile.name.toLowerCase().replace(' ', '-')}`
  };
}

export function processCompany(company) {
  return {
    ...company,
    processedAt: new Date().toISOString(),
    companyUrl: `https://mock-linkedin.com/company/${company.name.toLowerCase().replace(' ', '-')}`
  };
}