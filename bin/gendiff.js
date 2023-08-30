#!/usr/bin/env node

import { Command } from 'commander';


const programm = new Command();

programm
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number');
programm.parse();
