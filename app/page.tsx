
"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import {Button, Container, Group, Image, List, Stack, Text, ThemeIcon, Title, Flex, Box, useMantineTheme} from "@mantine/core";
import { motion } from "framer-motion";
import image from "../images/me.png";
import { Cookie, Gauge, User, Check, CircleAlert } from 'lucide-react';
import classes from '../css/FeaturesCards.module.css';
import style from '../css/ArticlesCardsGrid.module.css';
import projets from '../css/ProjetsCardsGrid.module.css';
import {Badge, Card, SimpleGrid, AspectRatio, Grid, Skeleton, FloatingIndicator, Tabs } from '@mantine/core';
import '@mantine/core/styles.css';
import { Code, Database, Frame, Framer, FileBox, Workflow, Globe, Layers2 } from 'lucide-react';
import { Anchor, Paper, TextInput, Textarea } from "@mantine/core";
import { Mail, Phone, MapPin, MessageSquare, Send, GitBranch, Palette } from "lucide-react";
import {Facebook, Github, Linkedin, Calendar } from "lucide-react";
import { Alert, Modal  } from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';

const footLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100009662919523" },
    { icon: Github, href: "https://github.com/NATAHINA" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rochaya-natahina-001b2123a/" },
  ];

const webdata = [
  {
    title: 'CQPM - Industrie et Technologie',
    image:
      'https://cqpm.fr/wp-content/uploads/2025/11/basket-secu.jpg',
    date: '18 Août 2024',
    url: "https://cqpm.fr/",
    technologies: ["WordPress", "PHP", "Elementor", "SEO", "CSS3"],
  },
  {
    title: 'NR CODE - Créateur des solutions web & design sur mesure',
    image:
      'https://nrcode.pentadev-mada.com/wp-content/uploads/2025/07/Site-desktop-768x768.png',
    date: '15 Septembre 2025',
    url: "https://nrcode.pentadev-mada.com/",
    technologies: ["WordPress", "PHP", "SEO", "CSS3"],
  },
  {
    title: 'PENTADEV MADA - Votre partenaire de développement informatique',
    image:
      'https://pentadev-mada.com/wp-content/uploads/2023/05/apple-ge2d9f4abc_1280.jpg',
    date: '20 Novembre 2024',
    url: "https://pentadev-mada.com/",
    technologies: ["WordPress", "PHP", "Divi", "SEO", "CSS3"],
  },
];

const logdata = [
  {
    title: "AMIKY – Plateforme de messagerie moderne",
    image:
      "/amiky_chat.png",
    date: "05 Janvier 2026",
    url: "https://amiky.vercel.app/",
    technologies: ["Next.js", "React", "Mantine UI", "Framer Motion"],
    description: `AMIKY est une plateforme de messagerie moderne qui rapproche les gens, en toute sécurité: `,
    features: [
      "Gestion complète des stocks en temps réel",
      "Suivi des ventes, dépenses et mouvements de produits",
      "Tableau de bord interactif pour visualiser les performances",
      "Analyse des produits les plus vendus et des marges réalisées",
      "Rapports détaillés pour orienter les décisions commerciales",
      "Système sécurisé et accessible en ligne, utilisable depuis n’importe où",
      "Interface intuitive adaptée aux responsables comme au personnel",
    ],

  },
  {
    title: "NR BOUTIQUE – Logiciel complet de gestion de boutique",
    image:
      "https://nrboutique.pentadev-mada.com/assets/images/big/supermarket.jpg",
    date: "18 Juillet 2025",
    url: "https://nrboutique.pentadev-mada.com/",
    technologies: ["CodeIgniter 3", "MySQL", "JavaScript", "Bootstrap5"],
    description: `NR BOUTIQUE est un logiciel conçu pour automatiser et simplifier toutes les opérations essentielles d’un commerce :`,
    features: [
      "Gestion complète des stocks en temps réel",
      "Suivi des ventes, dépenses et mouvements de produits",
      "Tableau de bord interactif pour visualiser les performances",
      "Analyse des produits les plus vendus et des marges réalisées",
      "Rapports détaillés pour orienter les décisions commerciales",
      "Système sécurisé et accessible en ligne, utilisable depuis n’importe où",
      "Interface intuitive adaptée aux responsables comme au personnel",
    ],
  },

  {
    title: "N-RESTO – Système de gestion dédié aux restaurants",
    image:
      "https://nresto.pentadev-mada.com/assets/images/big/card-3.png",
    date: "15 Juin 2025",
    url: "https://nresto.pentadev-mada.com/",
    technologies: ["CodeIgniter 3", "MySQL", "JavaScript", "Bootstrap5"],
    description: `N-RESTO est un logiciel moderne pensé pour améliorer et fluidifier la gestion d’un restaurant :`,
    features: [
      "Gestion des commandes et suivi en temps réel des tables",
      "Facturation rapide et simple",
      "Contrôle automatisé des stocks d’ingrédients",
      "Statistiques détaillées : chiffre d’affaires, plats les plus vendus, etc.",
      "Interface fluide adaptée aux serveurs et gestionnaires",
      "Réduction des erreurs grâce à un workflow optimisé",
      "Amélioration de la qualité du service et de la productivité de l’équipe",
    ],
  },

  {
    title: "NR-SCHOOL – Plateforme avancée de gestion scolaire",
    image:
      "https://pentadev-mada.com/wp-content/uploads/2023/06/cours.jpg",
    date: "05 Octobre 2025",
    url: "https://ecole.pentadev-mada.com/",
    technologies: ["CodeIgniter 3", "MySQL", "JavaScript", "Bootstrap4"],
    description: `NR-SCHOOL est une plateforme complète pour digitaliser la gestion administrative et pédagogique d’une école :`,
    features: [
      "Gestion des élèves, classes et niveaux",
      "Suivi des notes, bulletins et absences",
      "Paiement et gestion des frais de scolarité",
      "Planning dynamique et emploi du temps",
      "Partage de documents pour les enseignants et l’administration",
      "Communication interne centralisée",
      "Tableau de bord en temps réel : performances, effectifs, paiements, rapports",
      "Accès simple et sécurisé, disponible partout",
    ],
  },
];



const skillsData = [
  {
    category: "Langages & Typage",
    icon: <Code size={24} />,
    skills: ["PHP 7+", "JavaScript", "HTML5", "CSS3", "SQL"],
    color: "blue",
  },
  {
    category: "Frameworks & Librairies",
    icon: <Framer size={24} />,
    skills: ["Next.js", "React", "CodeIgniter 3", "Bootstrap"],
    color: "teal",
  },
  {
    category: "Bases de données",
    icon: <Database size={24} />,
    skills: ["MySQL", "PostgreSQL"],
    color: "green",
  },
  {
    category: "Conception & Architecture",
    icon: <Workflow size={24} />,
    skills: ["Méthodes Merise", "UML", "Architecture MVC"],
    color: "orange",
  },
  {
    category: "Gestion de version",
    icon: <GitBranch size={24} />,
    skills: ["Git", "GitHub"],
    color: "red",
  },
  {
    category: "Solutions Web & CMS",
    icon: <Globe size={24} />, 
    skills: ["WordPress", "SEO Technique", "Hébergement"],
    color: "grape",
  },
  {
    category: "Design & Création",
    icon: <Palette size={24} />,
    skills: ["Photoshop", "Canva"],
    color: "cyan",
  },
  {
    category: "Soft Skills & Projets",
    icon: <User size={24} />,
    skills: ["Adaptabilité", "Autonomie", "Trello (Agilité)", "Organisation"],
    color: "pink",
  },
];


export default function Home() {
  const theme = useMantineTheme();

  type Feedback = {
    type: "success" | "error";
    title: string;
    text: string;
  };

  type Article = {
    title: string;
    image: string;
    date: string;
    url: string;
    description: string;
    features: string[];
  };

  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [opened, setOpened] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });


    if (res.ok) {
      setFeedback({
        type: "success",
        title: "Message envoyé",
        text: "Votre message a bien été envoyé",
      });
    } else {
      setFeedback({
        type: "error",
        title: "Erreur",
        text: "Impossible d’envoyer le message",
      });
    }

  };

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback(null);
      }, 5000); // 5000 ms = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [feedback]);


  const sitecards = webdata.map((article) => (
    <Card key={article.title} radius="md" component="a" href={article.url} className={style.card} target="_blank">
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} radius="md" />
      </AspectRatio>
      <Text className={style.date}>{article.date}</Text>
      <Text className={style.title}>{article.title}</Text>

      <Flex gap={8} wrap="wrap" mt="sm">
        {article.technologies.map((tech, index) => (
          <Badge key={index} variant="light">
            {tech}
          </Badge>
        ))}
      </Flex>
    </Card>
  ));

  const logcards = logdata.map((article) => (
    <Card key={article.title} radius="md" className={style.card}
      onClick={() => {
        setSelectedArticle(article);
        setOpened(true);
      }}
      style={{ cursor: "pointer" }}>

      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} radius="md" />
      </AspectRatio>
      <Text className={style.date}>{article.date}</Text>
      <Text className={style.title}>{article.title}</Text>

      <Flex gap={8} wrap="wrap" mt="sm">
        {article.technologies.map((tech, index) => (
          <Badge key={index} variant="light">
            {tech}
          </Badge>
        ))}
      </Flex>

    </Card>
  ));

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Container size="xl" py={20}>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text fw={800} size="lg">
            {selectedArticle?.title}
          </Text>
        }
        size="lg"
        yOffset="10vh"
        xOffset={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {selectedArticle && (
          <>
            <Image src={selectedArticle.image} radius="xxs" mb="md"/>
            <Text size="sm" c="dimmed"><Calendar size={16} /> {selectedArticle.date}</Text>
            <Text mt="md" mb="md">{selectedArticle.description}</Text>
            <List
              spacing="xs"
              size="sm"
              mb="lg"
              icon={
                <ThemeIcon color="teal" size={16} radius="xl">
                  <Check size={16} />
                </ThemeIcon>
              }
            >
             
              {selectedArticle.features.map((feature, i) => (
                <List.Item key={i}>{feature}</List.Item>
              ))}
            </List>

            <a href={selectedArticle.url} target="_blank" rel="noopener noreferrer">
              <Button mb="md" radius="xl" size="md">
                Essayez
              </Button>
            </a>
          </>
        )}
      </Modal>

      {/**/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Flex
          align="center"
          justify="space-between"
          gap="xl"
          direction={{ base: "column", sm:"row" }}
          id="about"
        >
          

          <Stack flex={1} gap="sm" >
            <Title order={2} fw={800} fz={{base: 35}} >
              NATAHINA <span style={{color:"#5f3dc4"}}> Rochaya</span>
            </Title>

            <Text c="dimmed">
              Développeur web passionné par la création de solutions numériques modernes et performantes. <br/>
Spécialisé dans le développement de logiciels web, la création de sites web et l’administration de bases de données, j’aime transformer des idées en applications fiables, intuitives et adaptées aux besoins des utilisateurs.
            </Text>

            <List
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Développement structuré</b> – Architecture propre avec CodeIgniter et bonnes pratiques PHP/JS pour assurer performance et sécurité.
              </List.Item>
              <List.Item>
                <b>Écosystème open-source</b> – Outils légers et flexibles pour créer des projets sur mesure.
              </List.Item>
              <List.Item>
                <b>Design fonctionnel</b> – UI claire et responsive grâce à Bootstrap, Mantine et WordPress.
              </List.Item>
            </List>

            <Group mt="md">
              <a href="/cv.pdf" download>
                <Button radius="xl" size="md">
                  Download CV
                </Button>
              </a>
            </Group>
          </Stack>

          <Box flex={1} >
            <Image
              src={image.src}
              alt="ME"
              fit="contain"
              radius={9999}
              w={{ base: "100%", md: "80%", sm: "100%", xs: "60%", xxs: "50%" }}
            />
          </Box>
                    
        </Flex>
      </motion.div>

      {/*Mes compétences*/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Container size="lg" my={70} id="competence">
          <Group justify="center">
            <Badge variant="filled" size="lg">
              Mes Compétences
            </Badge>
          </Group>

          <Title order={2} className={classes.title} ta="center" mt="sm">
            Construire des solutions web efficaces et adaptées à tous les besoins
          </Title>

          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Grâce à ma maîtrise des langages, frameworks et outils modernes, je peux développer des applications et sites web performants qui s’intègrent parfaitement à n’importe quel projet ou technologie.
          </Text>
          
          <SimpleGrid cols={{ base: 1, md: 3, lg: 4, sm: 2 }} spacing="xl" mt={50}>
            {skillsData.map((item, i) => (
            <Card key={i} shadow="sm" padding="sm" radius="md" withBorder>
              <Group mb="sm" gap="xs">
                {item.icon}
                <Text fw={700} fz="lg">{item.category}</Text>
              </Group>
              <Flex gap={8} wrap="wrap">
                {item.skills.map((skill, i) => (
                  <Badge key={i} color={item.color} variant="light">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Card>
            ))}
          </SimpleGrid>

        </Container>
      </motion.div>


      {/*Mes projets*/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Container size="lg" my={70} id="projects">
          <Group justify="center">
            <Badge variant="filled" size="lg">
              Mes projets
            </Badge>
          </Group>

          <Title order={2} className={classes.title} ta="center" mt="sm">
            Découvrez une sélection de projets que j’ai conçus et développés.
          </Title>

          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Toutes ça reflétant mon expertise en création de logiciels web, de sites professionnels et d’outils numériques adaptés aux besoins réels des utilisateurs.
          </Text>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          
          <Group justify="center" align="center" my={30}>
            <Tabs variant="none" value={value} onChange={setValue}>
              <Tabs.List ref={setRootRef} className={projets.list}>
                <Tabs.Tab value="1" ref={setControlRef('1')} className={projets.tab}>
                  <Flex align="center">
                    <Globe size={18} style={{ marginRight: 8 }}/> SITE WEB
                  </Flex>
                </Tabs.Tab>
                <Tabs.Tab value="2" ref={setControlRef('2')} className={projets.tab}>
                  <Flex align="center">
                    <Code size={18} style={{ marginRight: 8 }}/>APP WEB
                  </Flex>
                </Tabs.Tab>

                <FloatingIndicator
                  target={value ? controlsRefs[value] : null}
                  parent={rootRef}
                  className={projets.indicator}
                />
              </Tabs.List>

              <Tabs.Panel value="1">
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3}} spacing={{ base: 0, sm: 'md' }}>
                  {sitecards}
                </SimpleGrid>
              </Tabs.Panel>
              <Tabs.Panel value="2">
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3}} spacing={{ base: 0, sm: 'md' }}>
                  {logcards}
                </SimpleGrid>
              </Tabs.Panel>
             
            </Tabs>
          </Group>
        </motion.div>
      </Container>
    </motion.div>

   {/*Contact*/}
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Container size="lg" my={70} id="contact">
          <Group justify="center">
            <Badge variant="filled" size="lg">
              Contacts
            </Badge>
          </Group>

          <Title order={2} className={classes.title} ta="center" mt="sm">
            Une idée à développer ?
          </Title>

          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Disponible pour collaborer, créer ou vous accompagner dans vos projets digitaux. Envoyez-moi un message et je vous répondrai rapidement.
          </Text>
          
         

          <Paper shadow="md" radius="lg" my={50}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              
              {/* ==================== COLONNE GAUCHE ==================== */}
              <Stack
                p="xl"
                style={{
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)",
                }}
              >
                <Text fz="xl" fw={700} c="white">
                  Contactez-moi
                </Text>

                <Text fz="sm" c="white" opacity={0.8}>
                  Je suis disponible pour vos projets web, logiciels ou missions freelance.
                </Text>

                <Text fz="lg" fw={600} c="white" mt="md">
                  Informations
                </Text>

                <Stack gap={6}>
                  <Group gap={8}>
                    <ThemeIcon variant="light" color="white">
                      <Mail size={16} />
                    </ThemeIcon>
                    <Text size="sm" c="white">
                      natahina.rochaya@gmail.com
                    </Text>
                  </Group>

                  <Group gap={8}>
                    <ThemeIcon variant="light" color="white">
                      <Phone size={16} />
                    </ThemeIcon>
                    <Text size="sm" c="white">
                      034 16 936 68 / 032 73 642 55
                    </Text>
                  </Group>

                  <Group gap={8}>
                    <ThemeIcon variant="light" color="white">
                      <MapPin size={16} />
                    </ThemeIcon>
                    <Text size="sm" c="white">
                      Lot 138 parcelle 12/21.22, Analankininina Hopital-Be
                    </Text>
                  </Group>

                  <Group my={40}>
                    {footLinks.map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <Anchor
                          key={i}
                          href={link.href}
                          target="_blank"
                          c="white"
                          component={Link}
                          rel="noopener noreferrer"
                        >
                          <Icon size={16} />
                        </Anchor>
                      );
                    })}
                  </Group>
                </Stack>
              </Stack>

              
              <form onSubmit={handleSubmit}>
                <Stack gap="md" p={15}>
                  <Text fz="lg" fw={700}>Envoyer un message</Text>

                  <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    <TextInput
                      label="Votre nom"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      leftSection={<ThemeIcon variant="light" color="violet">
                        <User size={16} />
                      </ThemeIcon>}
                    />

                    <TextInput
                      label="Votre email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      leftSection={<ThemeIcon variant="light" color="violet">
                        <Mail size={16} />
                      </ThemeIcon>}
                    />
                  </SimpleGrid>

                  <TextInput
                    label="Sujet"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    leftSection={<ThemeIcon variant="light" color="violet">
                      <MessageSquare size={16} />
                    </ThemeIcon>}
                  />

                  <Textarea
                    label="Votre message"
                    required
                    minRows={4}
                    autosize
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <Group justify="flex-end">
                    <Button type="submit" color="violet" rightSection={<Send size={16} />}>
                      Envoyer
                    </Button>
                  </Group>

                </Stack>
              </form>
            </SimpleGrid>
          </Paper>

          {feedback && (
              <Alert
                variant="filled"
                color={feedback.type === "success" ? "teal" : "red"}
                withCloseButton
                title={feedback.title}
                icon={feedback.type === "success" ? <Check /> : <CircleAlert />}
                onClose={() => setFeedback(null)}
              >
                {feedback.text}
              </Alert>
            )}

          
        </Container>
      </motion.div>



    </Container>
  );
}
