

"use client";

import {Container, Group, Box, Title, Button, Anchor, Burger, Drawer, Divider, ScrollArea, } from "@mantine/core";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useDisclosure  } from "@mantine/hooks";
import { Stack,Flex } from "@mantine/core";
import { usePathname } from "next/navigation";
import { smoothScrollTo } from "@/utils/smoothScroll";

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href, 600);
    }
  };

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#competence" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box component="header" py="md" style={{
        backdropFilter: "blur(15px)",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}>

      <Container
        size="xl">
        <Group justify="space-between" align="center" h="100%" w="100%">
          {/* LOGO */}
          <Title order={2} fw={800} size="xl" fz={32} mt={20} style={{ letterSpacing: "-1px" }}>
            N<span style={{ color: "#5f3dc4" }}>R</span>
          </Title>

          {/* LINKS DESKTOP */}
          <Group gap="lg" visibleFrom="sm">
            {navLinks.map((link) => (

              <Anchor
                key={link.href}
                component={Link}
                href={link.href}
                underline="never"
                fw={500}
                fz={15}
                style={{
                  textTransform: "uppercase",
                  color: pathname === link.href ? "#b197fc" : "inherit",
                  transition: "0.5s",
                }}
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.label}
              </Anchor>
            ))}
          </Group>

          {/* RIGHT ZONE DESKTOP */}
          <Group visibleFrom="sm">
            <ThemeToggle />
            <a href="/cv.pdf" download>
              <Button size="sm" variant="filled" radius="md">
                Download CV
              </Button>
            </a>
          </Group>

          {/* BURGER MOBILE */}
          <Group hiddenFrom="sm" gap="md">
            <ThemeToggle />
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              aria-label="Toggle navigation"
            />
          </Group>
        </Group>
      </Container>

      {/* DRAWER MOBILE */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Title
            order={2}
            fw={800}
            size="xl"
            fz={32}
            style={{ letterSpacing: "-1px" }}
          >
            N<span style={{ color: "#5f3dc4" }}>R</span>
          </Title>
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)">
          <Divider my="md" />

          {/* LINKS MOBILE */}

          <Stack gap={20} align="start">
            {navLinks.map((link) => (
              <Anchor
                key={link.href}
                component={Link}
                href={link.href}
                onClick={closeDrawer}
                underline="never"
                fw={700}
                fz="sm"
                style={{
                  color: pathname === link.href ? "#b197fc" : "gray",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>

          <Divider my="md" />

          {/* ACTIONS MOBILE */}
          <Flex direction="column" gap="lg" mt="lg">
            <Button size="md" variant="filled" fullWidth radius="md">
              Download CV
            </Button>
          </Flex>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
