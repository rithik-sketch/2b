from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http ://localhost:4000")

driver.find_element(By.XPATH, "//input[1]").send_keys("Arun")
driver.find_element(By.XPATH, "//input[2]").send_keys("IT")

driver.find_element(By.TAG_NAME, "button").click()

print("Test Successful")
driver.quit()
