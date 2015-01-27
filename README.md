# Liquid Bourbon Middleman Template

## Use Middleman static site generator with Bourbon and Liquid templates out of the box.


### Get Started

#### Install Bundler the Gem manager
`` `gem install bundler` ``

#### Install all dependencies
`` `Bundle install` ``

Generates all require gems for the project. From the command-line, start the preview web-server from inside your project folder

#### Run Server
`` `middleman` ``

#### Build
`` `middleman build` ``


Middleman will respect a Bundler Gemfile for specifying and controlling your gem dependencies.

#### Utilities
* The command scss-lint will run the scss linter
* The command jslint + [file]js runs the js linter

#### CSS Coding Guide
Atomic CSS translated in the bourbon language
*  Malt/Grain - Atom
*  Mash - Molecule
*  Barrel - Module

### Dependencies
* Ruby
* Gem
* bitters (~> 0.10.1)
* bourbon (~> 4.0.2)
* liquid (~> 3.0.0)
* middleman (~> 3.3.7)
* middleman-livereload (~> 3.1.0)
* neat (~> 1.7.0)
* refills (~> 0.0.2)
* sass (~> 3.4.9)
* tzinfo-data
* wdm (~> 0.1.0)
