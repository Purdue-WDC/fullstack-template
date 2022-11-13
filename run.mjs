import "zx/globals";

within(async () => {
  cd("backend");
  await $`npm run start`;
});
within(async () => {
  cd("frontend");
  $`npm run dev`;
});
