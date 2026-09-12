const pt = {
	bio: {
		about: {
			text: [
				"Sou engenheiro de software há 13 anos. Comecei com sistemas web e ERP, passei por e-commerce e integrações, e nos últimos anos venho atuando em plataformas de varejo digital de grande porte, hoje como Tech Lead e em arquitetura de soluções no Grupo Casas Bahia.",
				"Atuei na squad de vitrine do e-commerce e, a partir de dezembro de 2024, na liderança técnica da squad responsável pelas jornadas de autenticação e cadastro das marcas Casas Bahia, Extra e Pontofrio. Desde agosto de 2026 atuo no SalesAgent, agente de inteligência artificial generativa para vendas assistidas no canal WhatsApp.",
				"O que mais valorizo no meu trabalho é a parte que não aparece no código: traduzir problema técnico para quem não é técnico, aproximar times que dependem uns dos outros e criar um ambiente em que as pessoas se sintam à vontade para crescer."
			],
		}
	},
	skills: [
		{
			category: "Linguagens e frameworks",
			items: ["C#", ".NET 8/9/10", "ASP.NET Core", "Python", "SQL", "JavaScript"],
		},
		{
			category: "Arquitetura",
			items: ["Microsserviços", "Arquitetura orientada a eventos", "Clean Architecture", "DDD", "CQRS", "SOLID", "API Gateway (Kong)", "BFF", "mTLS", "Design patterns"],
		},
		{
			category: "IA generativa",
			items: ["Pydantic AI", "Azure OpenAI", "Orquestração de agentes", "Prompt chaining", "RAG", "pgvector"],
		},
		{
			category: "Cloud e infraestrutura",
			items: ["Azure", "AKS", "Kubernetes", "Docker", "Helm", "GitHub Actions", "Spinnaker", "XLRelease", "CDN"],
		},
		{
			category: "Dados e mensageria",
			items: ["Apache Kafka", "SQL Server", "PostgreSQL", "MongoDB", "Redis", "Dapper", "Entity Framework Core"],
		},
		{
			category: "Segurança",
			items: ["Autenticação e autorização", "MFA", "JWT", "Gestão de segredos", "Integração com antifraude"],
		},
		{
			category: "Qualidade e observabilidade",
			items: ["Testes de regressão e de contrato", "TDD", "xUnit", "Moq", "WireMock", "Postman/Newman", "SonarQube", "Teste de carga", "Dynatrace", "Grafana", "Elasticsearch", "Kibana"],
		},
		{
			category: "Liderança",
			items: ["Seleção técnica", "Desenvolvimento de pessoas", "Roadmap trimestral", "Alinhamento entre squads e stakeholders", "Metodologias ágeis"],
		},
	],
	featured: [
		{
			title: "Autenticação do canal WhatsApp",
			context: "SalesAgent · 2026",
			description:
				"Projetei e implementei o modelo de autenticação do canal, desbloqueando as jornadas que dependem de login, entre elas o fechamento de compra e a venda de produtos de marketplace. Assumi a frente por conhecer o produto de autenticação da companhia, resolvendo ponta a ponta, em Python e C#.",
		},
		{
			title: "Centralização da verificação em duas etapas",
			context: "Onboarding · 2024-2026",
			description:
				"Arquitetei a centralização da verificação em duas etapas, que passou a ser tratada em um único ponto de controle em vez de replicada por jornada e por canal. A iniciativa reduziu fraude, sequestro de conta e chargeback.",
		},
		{
			title: "Testes de regressão e de contrato como padrão da companhia",
			context: "Vitrine · 2023",
			description:
				"Introduzi testes de regressão e de contrato na esteira de CI/CD, executados a cada alteração para impedir que novas entregas quebrassem funcionalidades existentes ou os contratos das APIs. A prática nasceu de uma investigação de inconsistências em integração com parceiro externo, foi provada nos BFFs dos aplicativos e, em parceria com o time de esteira, tornou-se padrão da companhia, integrando a métrica de maturidade e condicionando a liberação de deploys diurnos.",
		},
		{
			title: "Fonte única de preço na jornada do cliente",
			context: "Vitrine · 2021-2024",
			description:
				"Propus e conduzi a reorganização das APIs de catálogo e preço, estabelecendo uma fonte única de preço. Eliminou divergências de preço entre anúncio, vitrine e página de produto, que geravam reclamações e desgaste de marca.",
		},
		{
			title: "Resposta a incidentes em segundos",
			context: "Onboarding · 2024-2026",
			description:
				"Idealizei a solução que substituiu um processo manual de contingência, com controle de acesso e histórico de alterações. O tempo de resposta a incidentes passou de mais de uma hora para segundos.",
		},
		{
			title: "Integração com a plataforma antifraude",
			context: "Onboarding · 2024-2026",
			description:
				"Estruturei a integração entre as jornadas de cadastro e autenticação e a plataforma antifraude, fornecendo ao motor de risco sinais em tempo real para suas decisões.",
		},
		{
			title: "Modernização da stack e qualidade de engenharia",
			context: "Onboarding · 2024-2026",
			description:
				"Mantive a stack atualizada até o .NET 10, padronizei a gestão de dependências entre os projetos e sustentei nota A na análise estática. Reduzi em 86% os débitos técnicos de segurança da squad em um semestre. No último semestre, a squad registrou o maior volume de subidas em produção com o menor número de incidentes.",
		},
	],
	experience: [
		{
			title: "Casas Bahia Tecnologia",
			duration: "Agosto 2026 - Presente",
			subtitle: "Software Engineer Specialist",
			details: [
				"Desenvolvimento backend sênior e arquitetura de soluções no SalesAgent, agente de inteligência artificial generativa para vendas assistidas no canal WhatsApp."
			],
			tags: [],
			icon: "robot",
		},
		{
			title: "Casas Bahia Tecnologia",
			duration: "Dezembro 2024 - Agosto 2026",
			subtitle: "Software Engineer Specialist · Tech Lead",
			details: [
				"Liderança técnica da squad responsável pelas jornadas de login, cadastro e gestão de conta das marcas Casas Bahia, Extra e Pontofrio. Time multidisciplinar de seis pessoas, entre backend .NET, iOS, Android, React e QA. Responsável pelo roadmap trimestral, pelo planejamento técnico e pelo desenvolvimento das pessoas do time."
			],
			tags: [
				"Liderança Técnica",
				"NET 10",
				"Arquitetura",
				"Gestão de Pessoas",
			],
			icon: "briefcase",
		},
		{
			title: "Casas Bahia Tecnologia",
			duration: "Agosto 2021 - Dezembro 2024",
			subtitle: "Senior Software Engineer",
			details: [
				"Squad responsável pela home e pela página de produto, integrando catálogo, preço, recomendação e advertising nos aplicativos iOS e Android. Início em agosto de 2021 alocado pela Stefanini Brasil, com internalização pela Casas Bahia Tecnologia em dezembro de 2022."
			],
			tags: [
				"NET 9",
				"AKS / Kubernetes",
				"Microsserviços",
				"Postman Newman",
				"Dynatrace / ELK",
				"Redis / MongoDB"
			],
			icon: "shopping-bag",
		},
		{
			title: "MOUT'S",
			duration: "Janeiro 2020 - Junho 2021",
			subtitle: "Desenvolvedor Sênior",
			details: [
				"Migração dos sistemas de gestão de insumos da AMBEV de PHP 7 para ASP.NET Core, com ganhos de desempenho, segurança e manutenibilidade. Condução da atualização de .NET Core 2.2 para 3.0 em toda a base de código.",
			],
			tags: [
				"Visual C#",
				"NET 2.2",
				"NET 3.0",
				"PHP",
				"Docker",
				"Apache",
			],
			icon: "beer",
		},
		{
			title: "CESTECH",
			duration: "Novembro 2018 - Junho 2019",
			subtitle: "Desenvolvedor Sênior",
			details: [
				"Manutenção e evolução de sistemas web e aplicativos para clientes do setor público, com foco em integridade e segurança de dados.",
			],
			tags: [
				"Angular",
				"Visual C#",
				"NET 3.0",
				"SQL Server",
				"ASP.NET MVC",
				"TFS",
			],
			icon: "users",
		},
		{
			title: "AGÊNCIA ROCK",
			duration: "Julho 2017 - Novembro 2018",
			subtitle: "Desenvolvedor Pleno",
			details: [
				"APIs e projetos de e-commerce para marcas como Brastemp, Consul, Petrobras e Samsung, incluindo integrações via XML e catálogos de campanhas de incentivo."
			],
			tags: [
				"HTML5",
				"Bootstrap",
				"Visual C#",
				"NET 2.2",
				"ASP.NET MVC",
				"Git",
			],
			icon: "bullhorn",
		},
		{
			title: "GS RETAIL",
			duration: "Novembro 2015 - Julho 2017",
			subtitle: "Desenvolvedor Pleno",
			details: [
				"Soluções personalizadas para o setor varejista em C#, ASP.NET e SQL Server, com integrações entre sistemas."
			],
			tags: [
				"HTML5",
				"CSS",
				"Visual C#",
				"NET Framework 4.5",
				"ASP.NET",
				"SQL Server",
			],
			icon: "shopping-bag",
		},
		{
			title: "Kemek Soluções",
			duration: "Janeiro 2014 - Outubro 2015",
			subtitle: "Desenvolvedor Júnior",
			details: [
				"Desenvolvimento de sistemas web em C# e ASP.NET MVC."
			],
			tags: [
				"HTML5",
				"CSS",
				"Visual C#",
				"NET Framework 4.0",
				"ASP.NET MVC",
			],
			icon: "shopping-bag",
		},
		{
			title: "Grupo SHC S.A",
			duration: "Março 2013 - Novembro 2013",
			subtitle: "Desenvolvedor Júnior",
			details: [
				"Sistemas ERP e aplicações web para concessionárias da montadora JAC Motors, cobrindo gestão de estoque, vendas e relatórios financeiros."
			],
			tags: [
				"HTML5",
				"CSS",
				"Visual C#",
				"NET Framework 4.0",
				"ASP.NET MVC",
			],
			icon: "car",
		},
		{
			title: "Print Laser Service S.A",
			duration: "Janeiro 2012 - Março 2013",
			subtitle: "Desenvolvedor Júnior",
			details: [
				"Processamento de dados variáveis, recepção de arquivos via FTP, geração de relatórios e manutenção de web services."
			],
			tags: [
				"Visual C#",
				"VB 6",
				"NET Framework 3.5",
				"Visual Source Safe",
				"FTP",
				"Expressões Regulares",
			],
			icon: "envelope-o",
		},
	],
	education: [
		{
			title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
			institution: "FATEC-SP · Faculdade de Tecnologia de São Paulo",
			duration: "2015 - 2018",
		},
	],
};

const en = {
	bio: {
		about: {
			text: [
				"I have been a software engineer for 13 years. I started with web systems and ERP, moved through e-commerce and integrations, and in recent years I have worked on large-scale digital retail platforms, today as a Tech Lead and in solutions architecture at Grupo Casas Bahia.",
				"I worked on the e-commerce storefront squad and, from December 2024, led the squad responsible for authentication and sign-up journeys across the Casas Bahia, Extra and Pontofrio brands. Since August 2026 I have been working on SalesAgent, a generative AI agent for assisted sales over WhatsApp.",
				"What I value most in my work is the part that does not show up in the code: translating technical problems for people who are not technical, bringing together teams that depend on each other, and creating an environment where people feel comfortable growing."
			],
		}
	},
	skills: [
		{
			category: "Languages and frameworks",
			items: ["C#", ".NET 8/9/10", "ASP.NET Core", "Python", "SQL", "JavaScript"],
		},
		{
			category: "Architecture",
			items: ["Microservices", "Event-driven architecture", "Clean Architecture", "DDD", "CQRS", "SOLID", "API Gateway (Kong)", "BFF", "mTLS", "Design patterns"],
		},
		{
			category: "Generative AI",
			items: ["Pydantic AI", "Azure OpenAI", "Agent orchestration", "Prompt chaining", "RAG", "pgvector"],
		},
		{
			category: "Cloud and infrastructure",
			items: ["Azure", "AKS", "Kubernetes", "Docker", "Helm", "GitHub Actions", "Spinnaker", "XLRelease", "CDN"],
		},
		{
			category: "Data and messaging",
			items: ["Apache Kafka", "SQL Server", "PostgreSQL", "MongoDB", "Redis", "Dapper", "Entity Framework Core"],
		},
		{
			category: "Security",
			items: ["Authentication and authorization", "MFA", "JWT", "Secret management", "Fraud-prevention integration"],
		},
		{
			category: "Quality and observability",
			items: ["Regression and contract testing", "TDD", "xUnit", "Moq", "WireMock", "Postman/Newman", "SonarQube", "Load testing", "Dynatrace", "Grafana", "Elasticsearch", "Kibana"],
		},
		{
			category: "Leadership",
			items: ["Technical hiring", "People development", "Quarterly roadmap", "Cross-squad and stakeholder alignment", "Agile methodologies"],
		},
	],
	featured: [
		{
			title: "WhatsApp channel authentication",
			context: "SalesAgent · 2026",
			description:
				"Designed and implemented the authentication model for the channel, unblocking every journey that depends on login, including checkout and marketplace product sales. Took on the effort because of my knowledge of the company's authentication product, solving it end to end in Python and C#.",
		},
		{
			title: "Centralized two-step verification",
			context: "Onboarding · 2024-2026",
			description:
				"Architected moving two-step verification to a single control point, replacing an approach that was replicated per journey and per channel. The initiative reduced fraud, account takeover and chargebacks.",
		},
		{
			title: "Regression and contract testing as a company standard",
			context: "Storefront · 2023",
			description:
				"Introduced regression and contract testing into the CI/CD pipeline, running on every change to prevent new releases from breaking existing functionality or API contracts. It grew out of an investigation into inconsistencies in a third-party integration, was proven on the mobile BFFs and, implemented together with the pipeline team, became a company-wide standard: it joined the engineering maturity metric and became a gate for daytime deployments.",
		},
		{
			title: "A single pricing source across the customer journey",
			context: "Storefront · 2021-2024",
			description:
				"Proposed and led the reorganization of catalog and pricing APIs, establishing a single pricing source. This eliminated price discrepancies between ad, storefront and product page that drove customer complaints and brand damage.",
		},
		{
			title: "Incident response in seconds",
			context: "Onboarding · 2024-2026",
			description:
				"Conceived the solution that replaced a manual contingency process, with access control and change history. Incident response time went from over an hour to seconds.",
		},
		{
			title: "Fraud-prevention platform integration",
			context: "Onboarding · 2024-2026",
			description:
				"Structured the integration between sign-up and authentication journeys and the fraud-prevention platform, feeding the risk engine with real-time signals for its decisions.",
		},
		{
			title: "Stack modernization and engineering quality",
			context: "Onboarding · 2024-2026",
			description:
				"Kept the stack current through .NET 10, standardized dependency management across projects and sustained an A rating on static analysis. Reduced the squad's security technical debt by 86% in one semester. In the last semester, the squad recorded the highest production deployment volume with the fewest incidents.",
		},
	],
	experience: [
		{
			title: "Casas Bahia Tecnologia",
			duration: "August 2026 - Present",
			subtitle: "Software Engineer Specialist",
			details: [
				"Senior backend development and solutions architecture on SalesAgent, a generative AI agent for assisted sales over WhatsApp."
			],
			tags: [],
			icon: "robot",
		},
		{
			title: "Casas Bahia Tecnologia",
			duration: "December 2024 - August 2026",
			subtitle: "Software Engineer Specialist · Tech Lead",
			details: [
				"Technical lead of the squad owning login, sign-up and account management journeys for the Casas Bahia, Extra and Pontofrio brands. Six-person cross-functional team spanning .NET backend, iOS, Android, React and QA. Owned the quarterly roadmap, technical planning and the development of the people on the team."
			],
			tags: [
				"Technical Leadership",
				"NET 10",
				"Architecture",
				"People Management",
			],
			icon: "briefcase",
		},
		{
			title: "Casas Bahia Tecnologia",
			duration: "August 2021 - December 2024",
			subtitle: "Senior Software Engineer",
			details: [
				"Squad owning the homepage and product detail page, integrating catalog, pricing, recommendation and advertising across the iOS and Android apps. Started in August 2021 through Stefanini Brasil and was hired directly by Casas Bahia Tecnologia in December 2022."
			],
			tags: [
				"NET 9",
				"AKS / Kubernetes",
				"Microservices",
				"Postman Newman",
				"Dynatrace / ELK",
				"Redis / MongoDB"
			],
			icon: "shopping-bag",
		},
		{
			title: "MOUT'S",
			duration: "January 2020 - June 2021",
			subtitle: "Senior Developer",
			details: [
				"Migrated AMBEV's supply management systems from PHP 7 to ASP.NET Core, improving performance, security and maintainability. Led the upgrade from .NET Core 2.2 to 3.0 across the codebase.",
			],
			tags: [
				"Visual C#",
				"NET 2.2",
				"NET 3.0",
				"PHP",
				"Docker",
				"Apache",
			],
			icon: "beer",
		},
		{
			title: "CESTECH",
			duration: "November 2018 - June 2019",
			subtitle: "Senior Developer",
			details: [
				"Maintained and evolved web systems and mobile applications for public sector clients, focused on data integrity and security.",
			],
			tags: [
				"Angular",
				"Visual C#",
				"NET 3.0",
				"SQL Server",
				"ASP.NET MVC",
				"TFS",
			],
			icon: "users",
		},
		{
			title: "AGÊNCIA ROCK",
			duration: "July 2017 - November 2018",
			subtitle: "Mid-level Developer",
			details: [
				"APIs and e-commerce projects for brands including Brastemp, Consul, Petrobras and Samsung, covering XML integrations and incentive campaign catalogs."
			],
			tags: [
				"HTML5",
				"Bootstrap",
				"Visual C#",
				"NET 2.2",
				"ASP.NET MVC",
				"Git",
			],
			icon: "bullhorn",
		},
		{
			title: "GS RETAIL",
			duration: "November 2015 - July 2017",
			subtitle: "Mid-level Developer",
			details: [
				"Custom solutions for the retail sector in C#, ASP.NET and SQL Server, including system-to-system integrations."
			],
			tags: [
				"HTML5",
				"CSS",
				"Visual C#",
				"NET Framework 4.5",
				"ASP.NET",
				"SQL Server",
			],
			icon: "shopping-bag",
		},
		{
			title: "Kemek Soluções",
			duration: "January 2014 - October 2015",
			subtitle: "Junior Developer",
			details: [
				"Web systems development in C# and ASP.NET MVC."
			],
			tags: [
				"HTML5",
				"CSS",
				"Visual C#",
				"NET Framework 4.0",
				"ASP.NET MVC",
			],
			icon: "shopping-bag",
		},
		{
			title: "Grupo SHC S.A",
			duration: "March 2013 - November 2013",
			subtitle: "Junior Developer",
			details: [
				"ERP systems and web applications for JAC Motors dealerships, covering inventory management, sales and financial reporting."
			],
			tags: [
				"HTML5",
				"CSS",
				"Visual C#",
				"NET Framework 4.0",
				"ASP.NET MVC",
			],
			icon: "car",
		},
		{
			title: "Print Laser Service S.A",
			duration: "January 2012 - March 2013",
			subtitle: "Junior Developer",
			details: [
				"Variable data processing, FTP file intake, report generation and web service maintenance."
			],
			tags: [
				"Visual C#",
				"VB 6",
				"NET Framework 3.5",
				"Visual Source Safe",
				"FTP",
				"Regular Expressions",
			],
			icon: "envelope-o",
		},
	],
	education: [
		{
			title: "Associate Degree in Systems Analysis and Development",
			institution: "FATEC-SP · São Paulo College of Technology",
			duration: "2015 - 2018",
		},
	],
};

export default { pt, en };
