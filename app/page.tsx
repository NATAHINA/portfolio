
"use client";

import Link from "next/link";
import { useState } from 'react';
import {Button, Container, Group, Image, List, Stack, Text, ThemeIcon, Title, Flex, Box, useMantineTheme} from "@mantine/core";
import { motion } from "framer-motion";
import image from "../images/image.svg";
import { Cookie, Gauge, User, Check } from 'lucide-react';
import classes from '../css/FeaturesCards.module.css';
import style from '../css/ArticlesCardsGrid.module.css';
import projets from '../css/ProjetsCardsGrid.module.css';
import {Badge, Card, SimpleGrid, AspectRatio, Grid, Skeleton, FloatingIndicator, Tabs } from '@mantine/core';
import '@mantine/core/styles.css';
import { Code, Database, Frame, Framer, FileBox, Workflow, Globe, Layers2 } from 'lucide-react';
import { Anchor, Paper, TextInput, Textarea } from "@mantine/core";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import {Facebook, Github, Linkedin} from "lucide-react";

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
  },
  {
    title: 'NR CODE - Créateur des solutions web & design sur mesure',
    image:
      'https://nrcode.pentadev-mada.com/wp-content/uploads/2025/07/Site-desktop-768x768.png',
    date: '15 Septembre 2025',
    url: "https://nrcode.pentadev-mada.com/",
  },
  {
    title: 'PENTADEV MADA - Votre partenaire de développement informatique',
    image:
      'https://pentadev-mada.com/wp-content/uploads/2023/05/apple-ge2d9f4abc_1280.jpg',
    date: '20 Novembre 2024',
    url: "https://pentadev-mada.com/",
  },
];

const logdata = [
  {
    title: 'NR BOUTIQUE - Logiciel de gestion de votre boutique',
    image:
      'https://nrboutique.pentadev-mada.com/assets/images/big/supermarket.jpg',
    date: '18 Juillet 2025',
    url: "https://nrboutique.pentadev-mada.com/",
  },
  {
    title: 'N-RESTO - Logiciel de gestion pour votre restaurant.',
    image:
      'https://nresto.pentadev-mada.com/assets/images/big/card-3.png',
    date: '15 Juin 2025',
    url: "https://nresto.pentadev-mada.com/",
  },
  {
    title: 'NR-SCHOOL - Logiciel de gestion pour votre école',
    image:
      'https://pentadev-mada.com/wp-content/uploads/2023/06/cours.jpg',
    date: '05 Octobre 2025',
    url: "https://ecole.pentadev-mada.com/",
  },
];


const skillsData = [
  {
    category: "Langages",
    icon: <Code size={24} />,
    skills: ["PHP 7", "JavaScript", "HTML5", "CSS3"],
    color: "blue",
  },
  {
    category: "Frameworks",
    icon: <Framer size={24} />,
    skills: ["CodeIgniter 3", "jQuery", "Bootstrap"],
    color: "teal",
  },
  {
    category: "Conception",
    icon: <Workflow size={24} />,
    skills: ["Méthodes Merise", "UML"],
    color: "orange",
  },
  {
    category: "Base de données",
    icon: <Database size={24} />,
    skills: ["MySQL", "Postgresql"],
    color: "green",
  },
  {
    category: "Outils",
    icon: <Frame size={24} />,
    skills: ["WordPress", "VSCode", "Trello", "Photoshop CS5", "Canva", "Figma"],
    color: "grape",
  },
  {
    category: "Pack Office",
    icon: <FileBox size={24} />,
    skills: ["Word", "Excel", "PowerPoint", "Publisher", "Outlook"],
    color: "violet",
  },
  {
    category: "Soft Skills",
    icon: <User size={24} />,
    skills: ["Adaptabilité", "Autonomie", "Travail en équipe", "Sens de l'organisation"],
    color: "pink",
  },
];


export default function Home() {
  const theme = useMantineTheme();

  const sitecards = webdata.map((article) => (
    <Card key={article.title} radius="md" component="a" href={article.url} className={style.card} target="_blank">
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} radius="md" />
      </AspectRatio>
      <Text className={style.date}>{article.date}</Text>
      <Text className={style.title}>{article.title}</Text>
    </Card>
  ));

  const logcards = logdata.map((article) => (
    <Card key={article.title} radius="md" component="a" href={article.url} className={style.card} target="_blank">
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} radius="md" />
      </AspectRatio>
      <Text className={style.date}>{article.date}</Text>
      <Text className={style.title}>{article.title}</Text>
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Flex
          align="center"
          justify="space-between"
          gap="xl"
          direction={{ base: "column", sm: "row-reverse" }}
          id="about"
        >
          
          <Stack flex={1} gap="sm">
            <Title order={2} fw={800} fz={35}>
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
              <Button radius="xl" size="md">
                En savoir plus
              </Button>

              <Button radius="xl" variant="default" size="md">
                Contact
              </Button>
            </Group>
          </Stack>
          
          <Box flex={1} ta="center">
            <Image
              src={image.src}
              alt="Hero image"
              fit="contain"
              w={{ base: "90%", md: "100%" }}
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
                    <Code size={18} style={{ marginRight: 8 }}/>LOGICIELS
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

              {/* ==================== COLONNE DROITE ==================== */}
              <form onSubmit={(e) => e.preventDefault()}> 
                <Stack gap="md" p={15}>
                  <Text fz="lg" fw={700}>
                    Envoyer un message
                  </Text>

                  <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    <TextInput
                      label="Votre nom"
                      placeholder=""
                      leftSection={
                        <ThemeIcon variant="light" color="violet">
                          <User size={16} />
                        </ThemeIcon>
                      }
                    />

                    <TextInput
                      label="Votre email"
                      placeholder=""
                      required
                      leftSection={
                        <ThemeIcon variant="light" color="violet">
                          <Mail size={16} />
                        </ThemeIcon>
                      }
                    />
                  </SimpleGrid>

                  <TextInput
                    label="Sujet"
                    placeholder=""
                    required
                    leftSection={
                      <ThemeIcon variant="light" color="violet">
                        <MessageSquare size={16} />
                      </ThemeIcon>
                    }
                  />

                  <Textarea
                    label="Votre message"
                    placeholder=""
                    minRows={4}
                    autosize
                  />

                  <Group justify="flex-end">
                    <Button color="violet" rightSection={<Send size={16} />}>
                      Envoyer
                    </Button>
                  </Group>
                </Stack>
              </form>
            </SimpleGrid>
          </Paper>

          
        </Container>
      </motion.div>



    </Container>
  );
}
