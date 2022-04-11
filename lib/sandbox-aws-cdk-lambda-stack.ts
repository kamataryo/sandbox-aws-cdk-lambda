import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class SandboxAwsCdkLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, 'sandbox-aws-cdk-lambda', {
      functionName: 'sandbox-aws-cdk-lambda',
      runtime: Runtime.NODEJS_14_X,
      entry: 'src/index.ts'
    })
  }
}
