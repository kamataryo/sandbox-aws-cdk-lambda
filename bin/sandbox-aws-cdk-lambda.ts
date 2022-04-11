#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SandboxAwsCdkLambdaStack } from '../lib/sandbox-aws-cdk-lambda-stack';

const app = new cdk.App();
new SandboxAwsCdkLambdaStack(app, 'SandboxAwsCdkLambdaStack');
