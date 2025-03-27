import {
  IconCompass,
  IconUsersGroup,
  IconRocket,
  IconHeartCode,
  IconCode,
  IconNews,
} from "@tabler/icons-react";

export type Category = keyof typeof categoriesInfo;

export const categoriesInfo = {
  leadership: {
    icon: IconCompass,
    label: "Leadership",
  },
  culture: {
    icon: IconUsersGroup,
    label: "Culture",
  },
  performance: {
    icon: IconRocket,
    label: "Performance",
  },
  "developer-experience": {
    icon: IconHeartCode,
    label: "Developer Experience",
  },
  tech: {
    icon: IconCode,
    label: "Tech",
  },
  sweetr: {
    icon: IconNews,
    label: "Product News",
  },
};
