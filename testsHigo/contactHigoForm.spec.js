import { test, expect } from "@playwright/test";

test("Testing Web higo.id", async ({ page }) => {
  // Set URL
  await page.goto("https://higo.id/contact-us");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Close" }).click();
  await page.waitForTimeout(1000);
  // await expect(page).toHaveTitle("HIGO | Hubungi Kami");

  // Fill Form Data
  await page.getByPlaceholder("ex.Clara").fill("test");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("clara@gmail.com").fill("test@gmail.com");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("+628******").fill("0811111111");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("ex.HIGO").fill("test");
  await page.waitForTimeout(1000);
  await page.click('select[name="service"]');
  await page.waitForTimeout(1000);
  await page.selectOption('select[name="service"]', { label: "WiFi Advertising" });
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Tulis pesan kamu").fill("test");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Submit" }).click();
});
