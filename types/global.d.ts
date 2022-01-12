// Types for compiled templates
declare module 'coverage-with-path-and-ts-repro/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
