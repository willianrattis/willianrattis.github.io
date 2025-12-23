export default {
	bio: {
		about: {
			text: [
				"Olá 👋 <br>Meu nome é Willian. Atualmente eu trabalho como <b>Engenheiro de Software</b> especializado em <b>NET</b>. Graduado pela FATEC.",
				"Eu sou um <b>desenvolvedor</b> curioso, gosto de aprender, trabalhar em equipe e propor soluções. Tenho um pefil proativo.",
				"Apaixonado pelo que faz <i class='fa fa-code'></i>"
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
			title: "Editor",
			skillName: "Proxyman, Fiddler",
			color: "10",
			percentage: "60",
		},
	],
	icons: [
		{ src: "/images/stack-images/azure.svg", alt: "Azure" },
		{ src: "/images/stack-images/git.svg", alt: "Git" },
		{ src: "/images/stack-images/docker.svg", alt: "Docker" },
		{ src: "/images/stack-images/kubernetes.svg", alt: "Kubernetes" },
		{ src: "/images/stack-images/postman.svg", alt: "Postman" },
		{ src: "/images/stack-images/vscode.svg", alt: "VSCode" },
		{ src: "/images/stack-images/rider.svg", alt: "Rider" },
		{ src: "/images/stack-images/jira.svg", alt: "Jira" },
		{ src: "/images/stack-images/angular.svg", alt: "Angular" },
		{ src: "/images/stack-images/react.svg", alt: "React" },
		{ src: "/images/stack-images/html5.svg", alt: "HTML5" },
		{ src: "/images/stack-images/css3.svg", alt: "CSS3" },
		{ src: "/images/stack-images/js.svg", alt: "JavaScript" },
		{ src: "/images/stack-images/notion.svg", alt: "Notion" },
	],
	projects: {
		web: [
			{
				projectName: "",
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
				projectName: "",
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
				projectName: "",
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
				"Internalizado como Sênior após excelente desempenho na consultoria. Atuei no backend (.NET Core) do time de aplicativos Mobile, focando na Home e PDP (Página de Produto). Lideré migrações sequenciais do .NET (v3 até v9) e introduzi a cultura de testes automatizados de API com Postman Newman na esteira DevOps, elevando a qualidade das entregas.",
				"Projetei e implementei uma nova arquitetura desacoplada para Catálogo e Preço, permitindo estratégias de cache híbridas (Redis para dados voláteis, MongoDB para estruturados) e unificando a precificação entre canais. Isso resultou em ganhos massivos de performance e permitiu diferenciação de preços por canal.",
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
			duration: "Janeiro 2014 - Outubro 2017",
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
	courses: [
		{
			title: "Udemy",
			duration: "15h",
			subtitle: "",
			details: [
				"Postman: The Complete Guide - REST API Testing"
			],
			tags: [
				"Postman",
				"Newman",
				"Testes de Software"
			],
			icon: "code",
		},
		{
			title: "Azure Na Prática",
			duration: "96 h",
			subtitle: "",
			details: [
				"Azure DevOps",
				"Github Actions"
			],
			tags: [
				"Azure",
				"DevOps",
				"Github Actions",
				"CI/CD"
			],
			icon: "code",
		},
		{
			title: "Desenvolvedor.IO",
			duration: "123 h",
			subtitle: "",
			details: [
				"Formação Arquiteto de Software",
				"Formação ASP.NET Core Expert"
			],
			tags: [
				"NET Core",
				"ASP.NET",
				"TDD",
				"BDD",
				"CQRS",
				"Mensageria"
			],
			icon: "code",
		},
		{
			title: "Cisco",
			duration: "70 h",
			subtitle: "",
			details: [
				"IT Essentials"
			],
			tags: [
				"Redes",
				"Segurança",
				"Sistemas Operacionais"
			],
			icon: "code",
		},
		{
			title: "Oregon EAD",
			duration: "",
			subtitle: "",
			details: [
				"ASP.NET MVC4",
				"Entity Framework 6"
			],
			tags: [
				"ORM",
				"Entity Framework",
				"Bancos de Dados",
				"ASP.NET",
				"NET Framework"
			],
			icon: "code",
		},
		{
			title: "Impacta Tecnologia",
			duration: "256 h",
			subtitle: "",
			details: [
				"Análise e Desenvolvimento de Sistemas – No 941409-101484",
				"Introdução à POO – No 941409-101485",
				"SQL 2008- Módulo I – No 941409-103000",
				"C# 2010 - Módulo I – No 941409-103001",
				"C# 2010 - Módulo II – No 941409-103002",
				"ASP.NET 2010 com C# - Módulo I – No 941409-106075",
				"ASP.NET 2010 com C# - Módulo II – No 941409-106075"
			],
			tags: [
				"POO",
				"NET Framework",
				"ASP.NET",
				"SQL Server"
			],
			icon: "code",
		},
	],
	contact: [
		{
			text: [
				"Se você quiser entrar em contato comigo, seja para explorar uma tecnologia, um negócio ou apenas dizer oi, sinta-se livre para me enviar um e-mail em <a href='mailto:willian.rattis@gmail.com'>willian.rattis@gmail.com</a>",
			],
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/willianrattis",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com//",
				},
			],
		},
		{
			label: "Recursos",
			data: [
				{
					text: "Habilitar Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Imprima está página",
					func: "window.print()",
				}
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "LinkedIn",
					link: "https://www.linkedin.com/in/willianrattis/",
				}
			],
		},
		{
			label: "copyright-text",
			data: [
				"Feito com &hearts; ."
			],
		},
	]
};
