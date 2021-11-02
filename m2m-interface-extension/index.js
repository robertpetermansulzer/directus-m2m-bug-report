import InterfaceComponent from "./interface.vue";

export default {
  id: "test-many-to-many-interface",
  name: "test name",
  description:
    "test desc",
  icon: "box",
  component: InterfaceComponent,
  types: ["alias"],
  relational: true,
  groups: ["m2m"],
};
