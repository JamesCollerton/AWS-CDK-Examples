import { expect as expectCDK, SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AwsCdkExamples from '../lib/code-s3-bucket-stack';

test('S3 Bucket Snapshot', () => {
    const app = new cdk.App();
    const stack = new AwsCdkExamples.CodeS3BucketStack(app, 'S3BucketSnapshotTest');
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
