/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    MyBucket: {
      name: string
      type: "sst.aws.Bucket"
    }
    MyWebsite: {
      type: "sst.aws.Astro"
      url: string
    }
  }
}
export {}