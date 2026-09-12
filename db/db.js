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
			title: "Linguagens",
			skillName: "Visual C#",
			color: "1",
			percentage: "88",
		},
		{
			title: "Frameworks/Bibliotecas",
			skillName: "Angular, Reactjs",
			color: "2",
			percentage: "22",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "3",
			percentage: "25",
		},
		{
			title: "Nuvem",
			skillName: "Azure",
			color: "4",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, CSS",
			color: "5",
			percentage: "40",
		},
		{
			title: "Controle de Versão",
			skillName: "Git, GitHub",
			color: "6",
			percentage: "70",
		},
		{
			title: "Ferramentas",
			skillName: "Postman",
			color: "7",
			percentage: "82",
		},
		{
			title: "Produtos SaaS",
			skillName: "JIRA, Trello",
			color: "8",
			percentage: "50",
		},
		{
			title: "Editor",
			skillName: "VS Code, Rider",
			color: "9",
			percentage: "77",
		},
		{
			title: "Depuração Proxy",
			skillName: "Proxyman, Fiddler",
			color: "10",
			percentage: "60",
		},
	],
	projects: {
		web: [
			{
				projectName: "Web Development",
				image: "",
				summary:
					"Como desenvolvedor web, tenho trabalhado com uma variedade de tecnologias ao longo dos anos. Comecei minha carreira trabalhando com tecnologias precursoras da web, como ASP.NET Web Forms, mas recentemente me especializei em frameworks modernos como Angular e React.",
				preview: "",
				techStack: [
					"Angular",
					"React",
					"ASP.NET MVC",
					"HTML5",
					"Bootstrap",
					"JavaScript",
					"CSS",
				],
			}
		],
		software: [
			{
				projectName: "Distributed Systems",
				image: "",
				summary:
					"Nos últimos anos, dediquei-me a desenvolver sistemas distribuídos e escaláveis, utilizando tecnologias populares como AKS, Kubernetes e Docker, junto com as mais recentes atualizações do framework .NET. Recentemente, utilizei essas tecnologias para construir um sistema para uma empresa de comércio eletrônico.",
				preview: "",
				techStack: [
					"NET",
					"ASP.NET Web API",
					"Swagger",
					"Microserviços",
					"Kafka",
					"MongoDb",
				],
			}
		],
		app: [
			{
				projectName: "Mobile Native & BFF",
				image: "",
				summary:
					"Durante os últimos quatro anos, tive a oportunidade de trabalhar junto com desenvolvimento de aplicativos nativos tanto para iOS quanto para Android. Essa jornada me permitiu compreender as particularidades desses dispositivos, além de me familiarizar com a necessidade de construir APIs Gateways (BFF) para atender esses dispositivos.",
				techStack: [
					"iOS",
					"Android",
				],
			}
		]
	},
	experience: [
		{
			title: "Grupo Casas Bahia",
			duration: "Dezembro 2024 - Presente",
			subtitle: "Software Engineer Specialist",
			details: [
				"Promovido a Especialista devido à liderança técnica exercida no time de aplicativos Mobile. Atualmente lidero o time de Onboarding (Identidade e Cadastro), sendo responsável pela formação da equipe, contratações, condução de 1:1s e definição da cultura técnica.",
				"Responsável pela arquitetura e interface com a área de negócios, balanceando demandas de Capex e Opex e definindo planejamentos estratégicos de curto a longo prazo. Lidero frentes críticas como a unificação de cadastros (Online/Lojas Físicas), agendamento de entregas e evolução da segurança com MFA e migração de autenticação (Cookies para JWT).",
				"Iniciei a implementação de um servidor IDP (Identity Provider) e atuo em colaboração direta com os times de Cyber Segurança e Antifraude para garantir uma jornada de cliente segura e unificada."
			],
			tags: [
				"Liderança Técnica",
				"NET 10",
				"Arquitetura",
				"Gestão de Pessoas",
				"IDP / JWT",
				"Cyber Security"
			],
			icon: "briefcase",
		},
		{
			title: "Grupo Casas Bahia",
			duration: "Dezembro 2022 - Dezembro 2024",
			subtitle: "Senior Software Engineer",
			details: [
				"Internalizado como Sênior após excelente desempenho na consultoria. Atuei no backend (.NET Core) do time de aplicativos Mobile, focando na Home e PDP (Página de Produto). Liderei migrações sequenciais do .NET (v3 até v9) e introduzi a cultura de testes automatizados de API com Postman Newman na esteira DevOps, elevando a qualidade das entregas.",
				"Liderei o desacoplamento arquitetural entre Catálogo e Preço, permitindo estratégias distintas de performance: aplicação de cache para dados de catálogo (menos voláteis) e consultas em tempo real para preços (dados quentes e estratégicos). Essa mudança eliminou divergências de valor na jornada do cliente e viabilizou tecnicamente a precificação exclusiva para o aplicativo.",
				"Participei ativamente de 5 Black Fridays (evento de tráfego massivo), utilizando Dynatrace, ELK e Grafana para observabilidade, e implementando padrões de resiliência como Circuit Breaker (Polly) em ambiente Kubernetes (AKS). Provei a eficácia do MongoDB como alternativa de cache para APIs de Imagens de alta demanda."
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
			title: "Stefanini (Alocado na Via Varejo)",
			duration: "Agosto 2021 - Dezembro 2022",
			subtitle: "Senior Software Engineer",
			details: [
				"Iniciei minha jornada no varejo atuando como consultor na Via Varejo (atual Grupo Casas Bahia). Trabalhei no desenvolvimento e manutenção de serviços distribuídos e APIs Gateway (BFF) para atender aos aplicativos Mobile, garantindo alta disponibilidade e escalabilidade.",
				"Utilizei tecnologias como ASP.NET Core, Docker e Kubernetes para modernizar o legado e facilitar a evolução dos produtos digitais da companhia."
			],
			tags: [
				"Visual C#",
				"NET 5",
				"Docker",
				"Kubernetes",
				"BFF",
				"Swagger"
			],
			icon: "id-card",
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
			duration: "Novembro 2018 - Julho 2019",
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
			duration: "Janeiro 2015 - Julho 2017",
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
			title: "Bacharél em Análise e Desenvolvimento de Sistemas",
			duration: "",
			subtitle: "Faculdade de Tecnologia do Estado de SP, FATEC",
			details: [
				"Sou bacharel em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia do Estado de São Paulo, uma instituição pública de ensino de  renome. Durante minha graduação, tive a oportunidade de estudar uma ampla gama de disciplinas, incluindo Programação, Algoritmos, Laboratório de Hardware, Matemática Discreta, Engenharia de Software, Linguagem de Programação, Sistemas de Informação, Cálculo, Estrutura de Dados, Estatística Aplicada, Banco de Dados, Segurança da Informação, Redes de Computadores, Sistemas Operacionais e Gestão de Equipes.",
				"Minha formação em Análise e Desenvolvimento de Sistemas não somente me permitiu adquirir habilidades valiosas para atuar como desenvolvedor de software, mas também ampliou  minha visão e compreensão sobre as complexidades e possibilidades do desenvolvimento de software."
			],
			tags: [
				"Sistemas Operacionais",
				"Engenharia de Software",
				"Bancos de Dados",
				"Testes de Software",
				"Estrutura de Dados &amp; Algoritímos"
			],
			icon: "graduation-cap",
		},
		{
			title: "Ensino Médio",
			duration: "",
			subtitle: "Colégio Campos Sales",
			details: [
				"Tive a oportunidade de estudar no ensino médio no Colégio Campos Salles, localizado no bairro da Lapa em São Paulo. Uma instituição de ensino tradicional, que me forneceu uma base sólida para continuar meus estudos e desenvolver minhas habilidades."
			],
			tags: [
				"Português",
				"Matemática",
				"História",
				"Geografia"
			],
			icon: "book",
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
			title: "Languages",
			skillName: "Visual C#",
			color: "1",
			percentage: "88",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Reactjs",
			color: "2",
			percentage: "22",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "3",
			percentage: "25",
		},
		{
			title: "Clouds",
			skillName: "Azure",
			color: "4",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, CSS",
			color: "5",
			percentage: "40",
		},
		{
			title: "Version Control",
			skillName: "Git, GitHub",
			color: "6",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Postman",
			color: "7",
			percentage: "82",
		},
		{
			title: "Saas products",
			skillName: "JIRA, Trello",
			color: "8",
			percentage: "50",
		},
		{
			title: "Editor",
			skillName: "VS Code, Rider",
			color: "9",
			percentage: "77",
		},
		{
			title: "Proxy Debugging",
			skillName: "Proxyman, Fiddler",
			color: "10",
			percentage: "60",
		},
	],
	projects: {
		web: [
			{
				projectName: "Web Development",
				image: "",
				summary:
					"As a web developer, I have worked with a variety of technologies over the years. I started my career working with precursor web technologies such as ASP.NET Web Forms, but recently I have specialized in modern frameworks such as Angular and React.",
				preview: "",
				techStack: [
					"Angular",
					"React",
					"ASP.NET MVC",
					"HTML5",
					"Bootstrap",
					"JavaScript",
					"CSS",
				],
			}
		],
		software: [
			{
				projectName: "Distributed Systems",
				image: "",
				summary:
					"In recent years, I have dedicated myself to developing distributed and scalable systems, using popular technologies such as AKS, Kubernetes and Docker, together with the latest updates to the .NET framework. Recently, I used these technologies to build a system for an e-commerce company.",
				preview: "",
				techStack: [
					"NET",
					"ASP.NET Web API",
					"Swagger",
					"Microservices",
					"Kafka",
					"MongoDb",
				],
			}
		],
		app: [
			{
				projectName: "Mobile Native & BFF",
				image: "",
				summary:
					"Over the last four years, I have had the opportunity to work on native application development for both iOS and Android. This journey allowed me to understand the particularities of these devices, in addition to becoming familiar with the need to build API Gateways (BFF) to serve these devices.",
				techStack: [
					"iOS",
					"Android",
				],
			}
		]
	},
	experience: [
		{
			title: "Grupo Casas Bahia",
			duration: "December 2024 - Present",
			subtitle: "Software Engineer Specialist",
			details: [
				"Promoted to Specialist due to technical leadership in the Mobile Apps team. Currently leading the Onboarding team (Identity and Registration), responsible for team building, hiring, conducting 1:1s, and defining technical culture.",
				"Responsible for architecture and interface with the business area, balancing Capex and Opex demands and defining short to long-term strategic plans. Leading critical fronts such as unified registration (Online/Physical Stores), delivery scheduling, and security evolution with MFA and authentication migration (Cookies to JWT).",
				"Started implementation of an IDP (Identity Provider) server and collaborating directly with Cyber Security and Antifraud teams to ensure a secure and unified customer journey."
			],
			tags: [
				"Technical Leadership",
				"NET 10",
				"Architecture",
				"People Management",
				"IDP / JWT",
				"Cyber Security"
			],
			icon: "briefcase",
		},
		{
			title: "Grupo Casas Bahia",
			duration: "December 2022 - December 2024",
			subtitle: "Senior Software Engineer",
			details: [
				"Internalized as Senior after excellent performance in consultancy. Worked on the backend (.NET Core) of the Mobile Apps team, focusing on Home and PDP (Product Page). Led sequential .NET migrations (v3 to v9) and introduced API automated testing culture with Postman Newman in the DevOps pipeline, elevating delivery quality.",
				"Led architectural decoupling between Catalog and Price, allowing distinct performance strategies: caching for catalog data (less volatile) and real-time queries for prices (hot and strategic data). This change eliminated value discrepancies in the customer journey and technically enabled exclusive pricing for the app.",
				"Actively participated in 5 Black Fridays (massive traffic event), using Dynatrace, ELK, and Grafana for observability, and implementing resilience patterns like Circuit Breaker (Polly) in Kubernetes (AKS) environment. Proven MongoDB's effectiveness as a cache alternative for high-demand Image APIs."
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
			title: "Stefanini (Allocated at Via Varejo)",
			duration: "August 2021 - December 2022",
			subtitle: "Senior Software Engineer",
			details: [
				"Started my journey in retail acting as a consultant at Via Varejo (now Grupo Casas Bahia). Worked on the development and maintenance of distributed services and API Gateways (BFF) to serve Mobile applications, ensuring high availability and scalability.",
				"Used technologies such as ASP.NET Core, Docker, and Kubernetes to modernize legacy systems and facilitate the evolution of the company's digital products."
			],
			tags: [
				"Visual C#",
				"NET 5",
				"Docker",
				"Kubernetes",
				"BFF",
				"Swagger"
			],
			icon: "id-card",
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
			duration: "November 2018 - July 2019",
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
			duration: "January 2015 - July 2017",
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
			title: "Bachelor's in Systems Analysis and Development",
			duration: "",
			subtitle: "São Paulo State Faculty of Technology, FATEC",
			details: [
				"I have a Bachelor's degree in Systems Analysis and Development from the São Paulo State Faculty of Technology, a renowned public educational institution. During my graduation, I had the opportunity to study a wide range of subjects, including Programming, Algorithms, Hardware Laboratory, Discrete Mathematics, Software Engineering, Programming Language, Information Systems, Calculus, Data Structure, Applied Statistics, Database, Information Security, Computer Networks, Operating Systems and Team Management.",
				"My background in Systems Analysis and Development not only allowed me to acquire valuable skills to act as a software developer, but also broadened my vision and understanding of the complexities and possibilities of software development."
			],
			tags: [
				"Operating Systems",
				"Software Engineering",
				"Databases",
				"Software Testing",
				"Data Structure &amp; Algorithms"
			],
			icon: "graduation-cap",
		},
		{
			title: "High School",
			duration: "",
			subtitle: "Colégio Campos Sales",
			details: [
				"I had the opportunity to study high school at Colégio Campos Salles, located in the Lapa neighborhood in São Paulo. A traditional educational institution, which provided me with a solid foundation to continue my studies and develop my skills."
			],
			tags: [
				"Portuguese",
				"Mathematics",
				"History",
				"Geography"
			],
			icon: "book",
		},
	],
};

export default { pt, en };
