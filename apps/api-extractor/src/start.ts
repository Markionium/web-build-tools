// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import * as os from 'os';
import * as colors from 'colors';
import * as path from 'path';

import { ApiExtractorCommandLine } from './cli/ApiExtractorCommandLine';

const myPackageJsonFilename: string = path.resolve(path.join(
  __dirname, '..', 'package.json')
);
const myPackageJson: { version: string } = require(myPackageJsonFilename);

console.log(os.EOL + colors.bold(`api-extractor ${myPackageJson.version} `
  + colors.cyan(' - http://aka.ms/extractor') + os.EOL));

const parser: ApiExtractorCommandLine = new ApiExtractorCommandLine();

parser.execute();
