import { rooferRules } from "./rules/roofers";
import { painterRules } from "./rules/painters";
import { landscaperRules } from "./rules/landscapers";


export const rules = [
  ...rooferRules,
  ...painterRules,
  ...landscaperRules,
];

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));

  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule.tags.includes(tag)),
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}
