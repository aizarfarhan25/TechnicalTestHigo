import { test, expect } from "@playwright/test";

test("Testing Comment", async ({ page }) => {
  // Set URL
  await page.goto("https://blog.higo.id/");
  await page.waitForTimeout(1000);

  const element = page.locator(
    "xpath=/html/body/main/div/section/div/div[2]/ul/li[1]/a"
  );

  await element.click();
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Tulis Nama Kamu").fill("test9");
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Tulis Komentar Kamu").fill("test9");
  await page.waitForTimeout(1000);

  await page.getByRole("button", { name: "Kirim" }).click();
  await page.waitForTimeout(1000);

  await page.getByRole("button", { name: "Suka" }).click();
  await page.waitForTimeout(1000);
});
