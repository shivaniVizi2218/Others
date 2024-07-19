export async function fetchPageDetails(page) {
  const currentURL = await page.url();
  const pageName = currentURL.split("index.php/")[1].replace("/", "_");
  return { pageName, currentURL };
}
