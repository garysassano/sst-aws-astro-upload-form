# sst-aws-astro-upload-form

SST app that deploys an Astro website with a form for uploading files to an S3 bucket.

## Prerequisites

- **_AWS:_**
  - Must have authenticated with [Default Credentials](https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli_auth) in your local environment.
- **_SST Ion:_**
  - Must be [installed](https://ion.sst.dev/docs/reference/cli/) in your system.
- **_pnpm:_**
  - Must be [installed](https://pnpm.io/installation) in your system.

## Installation

```sh
pnpm install
```

## Deployment

```sh
sst deploy
```

## Usage

Access the website by clicking the `<CLOUDFRONT_DISTRIBUTION_URL>`:

   ```sh
   ✔  Complete
      MyWebsite: <CLOUDFRONT_DISTRIBUTION_URL>
   ```

## Cleanup

```sh
sst remove
```
