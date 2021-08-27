import * as cdk from '@aws-cdk/core';
import * as ecr from '@aws-cdk/aws-ecr';
import { RemovalPolicy } from '@aws-cdk/core';


export class EcrStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ecr.Repository(this, 'EcrRepository', {
        repositoryName: "react-ecs",
        removalPolicy: RemovalPolicy.DESTROY
    });
  }
}
