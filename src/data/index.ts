import { rooferRules } from "./rules/roofers";
import { painterRules } from "./rules/painters";
import { landscaperRules } from "./rules/landscapers";
import { carpenterRules } from "./rules/carpenters";
import { concreteWorkerRules } from "./rules/concreteworkers";
import { drywallerRules } from "./rules/drywallers";
import { electricianRules } from "./rules/electricians";
import { excavationAndDemolitionRules } from "./rules/excavationanddemolition";
import { fenceInstallerRules } from "./rules/fenceinstallers";
import { flooringRules } from "./rules/flooring";
import { generalContractorRules } from "./rules/generalcontractors";
import { glazierRules } from "./rules/glaziers";
import { hvacTechnicianRules } from "./rules/hvactechnicians";
import { insulationSpecialistRules } from "./rules/insulationspecialists";
import { masonRules } from "./rules/masons";
import { plumberRules } from "./rules/plumbers";
import { tilerRules } from "./rules/tilers";
import { welderRules } from './rules/welders';



export const rules = [
  ...generalContractorRules,
  ...carpenterRules,
  ...plumberRules,
  ...painterRules,
  ...electricianRules,
  ...flooringRules,
  ...rooferRules,
  ...landscaperRules,
  ...hvacTechnicianRules,
  ...fenceInstallerRules,
  ...insulationSpecialistRules,
  ...glazierRules,
  ...tilerRules,
  ...masonRules,
  ...welderRules,
  ...drywallerRules,
  ...concreteWorkerRules,
  ...excavationAndDemolitionRules,
];

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));

  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule.tags.includes(tag)),
    }));
    //.sort((a, b) => b.rules.length - a.rules.length);
}
