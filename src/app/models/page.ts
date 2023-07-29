import { Component } from "@angular/core";

export class Page {
  path!: string;
  title!: string;
  component!: Component;
  requiredRoles: string[] = [];
}
