import type { CaseStudy } from "@/types/project";

export const kasaCase: CaseStudy = {
    overview: [
        { label: "Mon rôle", value: "Développement front-end" },
        { label: "Durée", value: "Projet de formation" },
        { label: "Contexte", value: "Projet de formation OpenClassrooms" },
        { label: "Plateforme", value: "Application web responsive" },
    ],

    tools: [
        {
            title: "React",
            description: "Développement de l'application",
            icon: "react",
        },
        {
            title: "React Router",
            description: "Navigation et gestion des routes",
            icon: "react",
        },
        {
            title: "Sass",
            description: "Styles et responsive design",
            icon: "sass",
        },
        {
            title: "Figma",
            description: "Maquettes et spécifications UI",
            icon: "figma",
        },
    ],

    sections: [
        {
            id: "context",
            title: "Contexte",
            body: [
                "Kasa est une plateforme de location d'appartements entre particuliers. Dans le cadre de sa modernisation, l'entreprise souhaitait remplacer son ancienne application développée en ASP.NET par une nouvelle stack JavaScript.",
                "Ma mission consistait à développer l'intégralité du front-end de la nouvelle application avec React à partir des maquettes Figma et des spécifications fonctionnelles fournies.",
            ],
        },

        {
            id: "objective",
            title: "Objectif",
            body: [
                "Construire une application React responsive et fidèle aux maquettes, en mettant en place une architecture basée sur des composants réutilisables et une navigation permettant de consulter les différents logements.",
            ],
        },

        {
            id: "role",
            title: "Mon rôle",
            body: [
                "J'ai réalisé le développement front-end de l'application : mise en place du projet React, création des composants, intégration des maquettes, configuration des routes et développement des interactions de l'interface.",
            ],
        },

        {
            id: "constraints",
            title: "Contraintes techniques",
            body: [
                "Le back-end n'étant pas encore disponible, l'application devait fonctionner à partir d'un fichier JSON contenant les données de 20 logements. Le développement devait également respecter les maquettes responsive et les spécifications fonctionnelles fournies.",
            ],
            list: [
                "Développement avec React",
                "Navigation avec React Router",
                "Données fournies via un fichier JSON",
                "Respect des maquettes desktop et mobile",
                "Architecture basée sur des composants réutilisables",
            ],
        },

        {
            id: "architecture",
            title: "Architecture & composants",
            body: [
                "L'application a été découpée en composants réutilisables afin de limiter la duplication du code et de faciliter sa maintenance. Les différentes pages utilisent les données des logements pour générer dynamiquement leur contenu.",
            ],
            list: [
                "Cards de logements",
                "Galerie d'images",
                "Composants Collapse",
                "Header et Footer",
                "Pages générées à partir des données des logements",
            ],
        },

        {
            id: "features",
            title: "Fonctionnalités",
            body: [
                "Plusieurs composants interactifs ont été développés pour reproduire le comportement défini dans les prototypes et les spécifications fonctionnelles.",
            ],
            list: [
                "Navigation entre les différentes pages avec React Router",
                "Affichage dynamique des logements",
                "Galerie avec navigation circulaire entre les images",
                "Ouverture et fermeture des sections Collapse",
                "Gestion des logements contenant une seule image",
                "Page d'erreur pour les routes ou logements inexistants",
            ],
        },

        {
            id: "challenges",
            title: "Défis rencontrés",
            body: [
                "La galerie représentait l'une des principales logiques interactives du projet. Elle devait permettre une navigation circulaire entre les images tout en adaptant son interface lorsque le logement ne contenait qu'une seule photo.",
                "Un autre enjeu consistait à construire suffisamment de composants génériques pour pouvoir les réutiliser sur plusieurs pages sans dupliquer la logique ou les styles.",
            ],
        },

        {
            id: "responsive",
            title: "Responsive Design",
            body: [
                "L'interface a été développée pour s'adapter aux différentes tailles d'écran en suivant les versions desktop et mobile des maquettes Figma. Les composants, espacements, images et mises en page évoluent selon l'espace disponible.",
            ],
        },

        {
            id: "solution",
            title: "Résultat",
            body: [
                "Le résultat est une application React responsive permettant de parcourir les logements et de consulter leurs informations détaillées à travers une interface composée de composants réutilisables et d'interactions conformes aux spécifications du projet.",
            ],
        },

        {
            id: "deliverables",
            title: "Livrables",
            body: [],
            list: [
                "Application React fonctionnelle",
                "Composants React réutilisables",
                "Navigation avec React Router",
                "Interface responsive",
                "Galerie d'images interactive",
            ],
        },

        {
            id: "next-steps",
            title: "Et ensuite ?",
            body: [],
            list: [
                "Connecter l'application à une véritable API",
                "Ajouter des tests automatisés",
                "Améliorer l'accessibilité des composants interactifs",
                "Optimiser davantage le chargement des images",
            ],
        },
    ],

    results: [
        {
            metric: "20",
            label: "Logements intégrés",
            note: "Contenus générés dynamiquement depuis les données JSON",
        },
        {
            metric: "100 %",
            label: "Responsive",
            note: "Interfaces adaptées aux maquettes desktop et mobile",
        },
        {
            metric: "1",
            label: "Application React",
            note: "Architecture construite autour de composants réutilisables",
        },
    ],

    learnings: [
        "Ce projet m'a permis de consolider ma maîtrise de React en construisant une application complète à partir de composants réutilisables.",
        "J'ai approfondi la gestion des routes et des contenus dynamiques avec React Router et des données JSON.",
        "Le développement de composants interactifs comme la galerie et les Collapse m'a permis de travailler davantage sur la gestion des états et des comportements conditionnels.",
    ],

    gallery: [
        // À compléter avec tes captures
    ],

    resources: [
        // GitHub, site déployé, etc.
    ],
};

export const oldBookCase: CaseStudy = {
    overview: [
      {
        label: "Mon rôle",
        value: "Développement back-end",
      },
      {
        label: "Durée",
        value: "Projet de formation",
      },
      {
        label: "Contexte",
        value: "Projet de formation OpenClassrooms",
      },
      {
        label: "Plateforme",
        value: "Application web",
      },
    ],
  
    tools: [
      {
        title: "Node.js",
        description: "Développement du serveur",
        icon: "nodejs",
      },
      {
        title: "Express",
        description: "Création de l'API REST",
        icon: "express",
      },
      {
        title: "MongoDB",
        description: "Base de données",
        icon: "mongodb",
      },
      {
        title: "Postman",
        description: "Tests des routes API",
        icon: "postman",
      },
    ],
  
    sections: [
      {
        id: "context",
        title: "Contexte",
        body: [
          "Mon Vieux Grimoire est une plateforme de référencement et de notation de livres développée pour une chaîne de librairies. Les utilisateurs peuvent consulter les ouvrages, ajouter leurs propres livres et publier une note visible par les autres visiteurs.",
          "Le front-end React étant déjà développé, ma mission consistait à concevoir et développer l'ensemble du back-end afin de fournir les données et fonctionnalités nécessaires à l'application.",
        ],
      },
  
      {
        id: "objective",
        title: "Objectif",
        body: [
          "Développer une API REST permettant au front-end de gérer les utilisateurs, les livres et les notations, tout en assurant la persistance des données, la sécurité des accès et l'optimisation des images envoyées par les utilisateurs.",
        ],
      },
  
      {
        id: "role",
        title: "Mon rôle",
        body: [
          "J'ai pris en charge le développement complet du back-end : configuration du serveur Node.js et Express, conception des modèles de données MongoDB, développement des routes et contrôleurs de l'API, authentification des utilisateurs, sécurisation des opérations et traitement des images.",
        ],
      },
  
      {
        id: "constraints",
        title: "Contraintes techniques",
        body: [
          "L'API devait respecter les spécifications techniques fournies et fonctionner avec un front-end React existant. Une attention particulière devait également être portée à la sécurité des données et à la réduction du poids des images conformément aux bonnes pratiques du Green Code.",
        ],
        list: [
          "Respect des spécifications de l'API",
          "Compatibilité avec le front-end React existant",
          "Persistance des données avec MongoDB",
          "Authentification et sécurisation des routes",
          "Optimisation des images envoyées par les utilisateurs",
        ],
      },
  
      {
        id: "architecture",
        title: "Architecture de l'API",
        body: [
          "Le back-end a été structuré afin de séparer les différentes responsabilités de l'application. Les routes définissent les points d'entrée de l'API, les contrôleurs gèrent la logique métier et les modèles assurent la représentation et la persistance des données dans MongoDB.",
        ],
        list: [
          "Routes dédiées aux utilisateurs et aux livres",
          "Contrôleurs pour la logique métier",
          "Modèles de données MongoDB",
          "Middlewares d'authentification",
          "Middleware de gestion des fichiers",
        ],
      },
  
      {
        id: "features",
        title: "Fonctionnalités",
        body: [
          "L'API fournit les différentes opérations nécessaires au fonctionnement de la plateforme, depuis la création d'un compte jusqu'à la publication et la notation d'un livre.",
        ],
        list: [
          "Création et authentification des utilisateurs",
          "Consultation des livres",
          "Ajout de nouveaux livres",
          "Modification et suppression de livres",
          "Ajout d'une notation par les utilisateurs",
          "Calcul et mise à jour de la note moyenne",
          "Gestion et optimisation des images",
        ],
      },
  
      {
        id: "security",
        title: "Sécurité",
        body: [
          "La sécurisation de l'API constituait une partie importante du projet. L'accès aux opérations sensibles a été limité aux utilisateurs authentifiés et certaines actions, comme la modification ou la suppression d'un livre, nécessitent également de vérifier que l'utilisateur en est bien le propriétaire.",
        ],
        list: [
          "Authentification des utilisateurs",
          "Protection des routes privées",
          "Contrôle des autorisations",
          "Protection des informations d'identification",
          "Validation des opérations côté serveur",
        ],
      },
  
      {
        id: "image-optimization",
        title: "Optimisation des images",
        body: [
          "Les utilisateurs pouvant ajouter de nombreux livres et leurs couvertures, la gestion du poids des images représentait un enjeu important. Les images envoyées à l'API sont traitées avant leur stockage afin de réduire leur poids et de limiter les ressources nécessaires à leur transfert et à leur affichage.",
        ],
      },
  
      {
        id: "challenges",
        title: "Défis rencontrés",
        body: [
          "L'un des principaux défis consistait à sécuriser les différentes opérations sans empêcher la communication attendue avec le front-end existant. La gestion des autorisations devait notamment garantir qu'un utilisateur ne puisse modifier ou supprimer que les livres qu'il avait lui-même ajoutés.",
          "La gestion des notations nécessitait également de contrôler les données reçues et de maintenir une note moyenne cohérente après chaque nouvelle évaluation.",
        ],
      },
  
      {
        id: "solution",
        title: "Résultat",
        body: [
          "Le résultat est une API REST fonctionnelle connectée au front-end React de Mon Vieux Grimoire. Elle permet de gérer les comptes utilisateurs, les livres, les images et les notations tout en assurant la persistance des données et la protection des opérations sensibles.",
        ],
      },
  
      {
        id: "deliverables",
        title: "Livrables",
        body: [],
        list: [
          "API REST fonctionnelle",
          "Base de données MongoDB",
          "Système d'authentification",
          "Gestion des livres et des notations",
          "Optimisation des images",
          "Intégration avec le front-end React",
        ],
      },
  
      {
        id: "next-steps",
        title: "Et ensuite ?",
        body: [],
        list: [
          "Ajouter des tests automatisés de l'API",
          "Mettre en place une documentation OpenAPI",
          "Renforcer la validation des données",
          "Déployer l'API et la base de données en production",
        ],
      },
    ],
  
    results: [
      {
        metric: "1",
        label: "API REST",
        note: "Back-end complet développé avec Node.js et Express",
      },
      {
        metric: "3",
        label: "Ressources principales",
        note: "Utilisateurs, livres et notations gérés par l'API",
      },
      {
        metric: "100 %",
        label: "Routes protégées",
        note: "Opérations sensibles soumises à authentification et autorisation",
      },
    ],
  
    learnings: [
      "Ce projet m'a permis d'approfondir la conception d'une API REST et la structuration d'une application back-end avec Node.js et Express.",
      "J'ai renforcé ma compréhension de l'authentification et des mécanismes d'autorisation nécessaires pour protéger les données et les opérations sensibles.",
      "L'optimisation des images m'a également sensibilisé à l'impact des ressources multimédias sur les performances et à l'intérêt d'intégrer des principes d'éco-conception dès le développement du back-end.",
    ],
  
    gallery: [
      // À compléter avec tes captures
    ],
  
    resources: [
      // GitHub, documentation API, site déployé...
    ],
  };