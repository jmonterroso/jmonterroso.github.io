---
layout: post
title:  "Blueprint Snippets with Angular CLI"
description: In this post I approach the versions and the symbols that helps to describe the version used in package.json file  
image: '/img/blog/tilde-vs-caret-in-package-json.png'
date:   2018-09-13 14:00:02 -0600
categories: frontend javascript version 
# image: hyperapp-fundamentals.png
reading_time: 3 min
comments: true
slug: blueprint-snippets-with-angular-cli
---

## Blueprint:

The angular ClI generates from blueprints, this means that the cli will generate code for use using a cli command, or a blueprint that will define the file and we can indicate options and filename of the file.
```
ng generate <blueprint>  
```

For example the *generate* command will generate code from a blueprint

  

Syntax:

```
ng generate <blueprint> <options>
```

 
Use the `--dry-run` or `-d`  option command to practice (meaning that the file won't be written instead only shows and output of the command)

  

```
ng generate component customer
ng generate service customer-data
ng generate class customer-model
  
```

  

## Generate Components with Angular CLI

```
ng generate component customer
```

  or You can use an Alias

```
ng g c customer
```

### Common component blueprint Options
| Options              | Alias | Description                           |
|----------------------|-------|---------------------------------------|
| --flat               |       | Should be a folder be created?        |
| --inline-template    | -t    | Will the template be in the .ts file? |
| --inline-style       | -s    | Will the style be in the .ts file?    |
| --spec               |       | Generate spec?                        |
| --view-encapsulation | -v    | View encapsulation strategy           |
| --change-detection   | -c    | Change detection strategy             |
| --dry-run            | -d    | Report the files don't write them     
|--prefix			   |	   | Add prefix to component

### Common ways to generate components

```
ng generate component pet
ng generate component pet --inline-template --inline-style
```

Using Alias

```
ng g c pet
ng g c pet -t -s (alias makes efficient shortcuts)
ng g c pet -ts (stacking aliases)

ng g c pet --flat (won't create a /pet folder)
```


### Generating  Angular Directives with Angular CLI

Generating Angular Directives is similar to generate a component but in this case we use `ng generate directive <directive-name>` or using alias `ng g d <directive-name>`

Let's see a few examples:

```
ng g d search-box
ng g d searchbox --flat false 
```
Using the flag `--flat false` will generate a separate folder fo the directive by default it will create the directive in the source `app` folder.

### Generating  Angular Services with Angular CLI

Generating Angular Services by blueprint is similar to generate a component but in this case we use `ng generate service <service-name>` or using alias `ng g s <service-name>`

Let's see a few examples:

```
ng g s sales-data
ng g d searchbox --flat false 
```

### Generating  Classes with Angular CLI

Let's say we want to have a model directory where we put our models/classes
` mkdir models`

**Use alias cl for class**
```
ng g cl models/customer
```

It will create the class inside our models folder.

### Generating  Interfaces with Angular CLI
This command will create a interface inside the folder models that we created in the previous step

```
ng g i models/person
```

### Generating  Enums with Angular CLI
This command will create an enum file inside the folder models that we created in the previous step

```
ng g e models/gender
```

### Generating  Angular Pipes with Angular CLI

```
ng g p init-caps
or 
ng g p shared/init-caps
```

The first command will create it in the root directory /app while the other command will create the new pipe in the folder `/shared/init-caps.ts`

### Generating  Angular Modules with Angular CLI

```
ng g p init-caps
or 
ng g p shared/init-caps
```

The first command will create the pipe in the root directory /app while the other command will create the new pipe in the folder `/shared/init-caps.ts`



