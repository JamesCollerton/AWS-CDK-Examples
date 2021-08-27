import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import { RemovalPolicy } from '@aws-cdk/core';

export class CodeS3BucketStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new s3.Bucket(this, 'CodeBucket', {
      bucketName: "react-ecs-bucket",
      removalPolicy: RemovalPolicy.DESTROY,
      versioned: true
    });
  }
}
