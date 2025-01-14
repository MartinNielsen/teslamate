module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "category",
          label: "Installation",
          items: ["installation/docker", "installation/debian"],
        },
        "faq",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/traefik", "guides/apache"],
    },
    {
      type: "category",
      label: "Import",
      items: ["import/teslafi", "import/tesla_apiscraper"],
    },
    {
      type: "category",
      label: "Integrations",
      items: ["integrations/home_assistant", "integrations/mqtt"],
    },
    {
      type: "category",
      label: "Advanced Configuration",
      items: ["configuration/environment_variables"],
    },
    {
      type: "category",
      label: "Maintenance",
      items: [
        "upgrading",
        "maintenance/backup_restore",
        "maintenance/manually_fixing_data",
        "maintenance/upgrading_postgres",
      ],
    },
    {
      type: "doc",
      id: "development",
    },
  ],
};
