const pt = {
	bio: {
		about: {
			text: [
				"Olá 👋 <br>Meu nome é Willian. Atualmente eu trabalho como <b>Engenheiro de Software</b> especializado em <b>NET</b>. Graduado pela FATEC.",
				"Eu sou um <b>desenvolvedor</b> curioso, gosto de aprender, trabalhar em equipe e propor soluções. Tenho um perfil proativo.",
				"Apaixonado pelo que faz <i class='fa fa-code'></i>"
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
				"Como desenvolvedor, trabalhei na equipe responsável pela migração dos sistemas de gestão de insumos na fábrica da AMBEV, de PHP 7 para ASP.NET Core. Essa migração permitiu uma melhoria significativa no desempenho dos sistemas, além de garantir uma maior segurança e manutenibilidade das aplicações.",
				"A migração do sistema de NET Core 2.2 para o 3.0 foi um desafio significativo, devido às grandes mudanças no framework. Foi necessário ajustar o código para se adequar às novas funcionalidades e melhorias, mas graças ao esforço da equipe de desenvolvimento, conseguimos realizar essa tarefa com sucesso.",
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
				"Como desenvolvedor trabalhei na manutenção de sistemas, com equipes no aperfeiçoamento de soluções tecnológicas personalizadas para prefeituras e sistemas estaduais.",
				"Meus projetos incluem a criação de aplicativos e sistemas web para garantir a eficiência e transparência dos processos administrativos, além de manter a integridade e segurança dos dados. Acompanhando de perto a evolução e tendências tecnológicas para garantir a melhor performance para os sistemas.",
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
				"Como desenvolvedor, tive a oportunidade de atuar em projetos de e-commerce, desenvolvimento de APIs, integração com arquivos XML, criação de catálogos de prêmios e campanhas de incentivo interno para empresas renomadas como BRASTEMP, CONSUL, PETROBRAS e SAMSUNG. Tudo isso me permitiu adquirir uma ampla gama de habilidades e conhecimentos na área de marketing digital, e me permitiu entregar soluções eficazes para meus clientes."
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
				"Como desenvolvedor de software, pude trabalhar em soluções para o setor varejista, visando a melhoria da gestão e auxílio aos varejistas. Utilizei diversas tecnologias para alcançar esses objetivos, incluindo C#, ASP.NET, JavaScript, CSS, HTML5, Web Services e integrações de sistemas. Isso me permitiu criar soluções robustas e personalizadas para atender às necessidades específicas dos meus clientes do varejo."
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
				"Como desenvolvedor de software, nesta época trabalhei com desenvolvimento de sistemas web utilizando C# e ASP.NET MVC com Razor para o front-end. Isso me permitiu criar soluções eficientes e intuitivas para usuários, com uma interface amigável e fácil de usar. Além disso, a experiência adquirida na construção de aplicações web me permitiu me desenvolver como profissional e aprender mais sobre arquitetura MVC."
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
				"Como desenvolvedor de software, tive a oportunidade de trabalhar com sistemas ERP e desenvolvimento de sistemas web para a recém-chegada montadora JAC Motors. Essa experiência me permitiu trabalhar com soluções que contribuíam para as atividades comuns necessárias para concessionárias da marca, incluindo gerenciamento de estoque, vendas e relatórios financeiros. Isso me permitiu adquirir habilidades valiosas e conhecimentos sobre a indústria automotiva, bem como melhorar minha compreensão de como fazer levantamento de requisitos."
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
				"Como desenvolvedor de software, tive a oportunidade de trabalhar com tratamento de dados para uma das maiores empresas do ramo de impressão de correspondências e contas do país. Essa foi minha primeira experiência e foi muito valiosa, pois devido ao grande volume de dados a serem tratados, tive a oportunidade de trabalhar com técnicas avançadas de manipulação de strings, expressões regulares e desenvolvimento de serviços para Windows que rodam em background nos servidores, aguardando a chegada de dados via FTP. Trabalhei com tecnologias antigas como o Net Framework 3.0 e 3.5, Visual Studio 2005 e 2008 e ainda Visual Basic 6, mas essa experiência foi fundamental para meu crescimento como desenvolvedor de software."
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
				"Hello 👋 <br>My name is Willian. I currently work as a <b>Software Engineer</b> specializing in <b>.NET</b>. Graduated from FATEC.",
				"I am a curious <b>developer</b>, I like to learn, work in a team and propose solutions. I have a proactive profile.",
				"Passionate about what I do <i class='fa fa-code'></i>"
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
				"As a developer, I worked on the team responsible for migrating input management systems at the AMBEV factory from PHP 7 to ASP.NET Core. This migration allowed for a significant improvement in system performance, as well as ensuring greater security and maintainability of applications.",
				"Migrating the system from NET Core 2.2 to 3.0 was a significant challenge due to major changes in the framework. It was necessary to adjust the code to suit new features and improvements, but thanks to the development team's effort, we successfully accomplished this task.",
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
				"As a developer, I worked on maintaining systems, with teams improving personalized technological solutions for city halls and state systems.",
				"My projects include creating applications and web systems to ensure efficiency and transparency of administrative processes, as well as maintaining data integrity and security. Closely following technological evolution and trends to ensure the best performance for systems.",
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
				"As a developer, I had the opportunity to work on e-commerce projects, API development, XML file integration, creation of prize catalogs and internal incentive campaigns for renowned companies such as BRASTEMP, CONSUL, PETROBRAS and SAMSUNG. All of this allowed me to acquire a wide range of skills and knowledge in digital marketing, and enabled me to deliver effective solutions to my clients."
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
				"As a software developer, I was able to work on solutions for the retail sector, aiming to improve management and assist retailers. I used various technologies to achieve these goals, including C#, ASP.NET, JavaScript, CSS, HTML5, Web Services and system integrations. This allowed me to create robust and personalized solutions to meet the specific needs of my retail clients."
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
				"As a software developer, at this time I worked on web system development using C# and ASP.NET MVC with Razor for the front-end. This allowed me to create efficient and intuitive solutions for users, with a friendly and easy-to-use interface. Additionally, the experience gained in building web applications allowed me to develop as a professional and learn more about MVC architecture."
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
				"As a software developer, I had the opportunity to work with ERP systems and web system development for the newly arrived automaker JAC Motors. This experience allowed me to work with solutions that contributed to common activities needed for brand dealerships, including inventory management, sales and financial reports. This allowed me to acquire valuable skills and knowledge about the automotive industry, as well as improve my understanding of how to do requirements gathering."
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
				"As a software developer, I had the opportunity to work with data processing for one of the largest companies in the bill and correspondence printing sector in the country. This was my first experience and it was very valuable, because due to the large volume of data to be processed, I had the opportunity to work with advanced string manipulation techniques, regular expressions and development of Windows services that run in the background on servers, awaiting data arrival via FTP. I worked with older technologies like Net Framework 3.0 and 3.5, Visual Studio 2005 and 2008 and even Visual Basic 6, but this experience was fundamental for my growth as a software developer."
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
