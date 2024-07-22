export default async function getData() {
  const res = await fetch("https://script.google.com/macros/s/AKfycbxNVWRbQiDE0m6VpckaoShPa4yKdFwLVk75WZRa0VrGXrF_fjVPtPpEhVWfPy5MVbpqdA/exec")
  return res.json()
}