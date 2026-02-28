export const examples: { name: string; yaml: string }[] = [
  {
    name: "Bug RCA: Payment Timeout",
    yaml: `meta:
  title: "Payment Timeout RCA"
  description: |
    Root cause analysis of intermittent payment
    timeouts during peak hours.
  start: [incident]

nodes:
  incident:
    title: "Payment Timeout in Checkout"
    short_title: "Incident"
    content: |
      Users reported intermittent payment timeouts
      during peak hours on the checkout page.
      Error rate spiked to 12% between 2-4pm.
    parents: []

  api_gateway:
    title: "API Gateway Logs"
    short_title: "Gateway"
    content: |
      Gateway logs showed 504 errors on /api/payment.
      Average response time jumped from 200ms to 8s.
      Connection pool utilization at 95%.
    parents: [incident]

  db_analysis:
    title: "Database Analysis"
    short_title: "DB Analysis"
    content: |
      Slow query log revealed a full table scan on
      the transactions table. Missing index on
      (user_id, created_at) columns.
    parents: [api_gateway]

  lock_contention:
    title: "Row Lock Contention"
    short_title: "Lock Issue"
    content: |
      Multiple concurrent transactions competing
      for locks on the same user rows due to
      retry logic creating duplicate attempts.
    parents: [api_gateway]

  root_cause:
    title: "Root Cause"
    short_title: "Root Cause"
    content: |
      Missing composite index combined with aggressive
      retry logic caused cascading lock contention
      under load. Each retry amplified the problem.
    parents: [db_analysis, lock_contention]

  fix:
    title: "Fix Applied"
    short_title: "Fix"
    content: |
      1. Added composite index (user_id, created_at)
      2. Implemented idempotency keys for payments
      3. Added exponential backoff to retry logic
      4. Set connection pool timeout to 2s
    parents: [root_cause]
`,
  },
  {
    name: "The Lightbulb",
    yaml: `meta:
  title: "The Invention of the Lightbulb"
  description: |
    Key milestones in the development of
    electric lighting.
  start: [arc_lamp]

nodes:
  arc_lamp:
    title: "Arc Lamp (1802)"
    short_title: "Arc Lamp"
    content: |
      Humphry Davy demonstrated the first electric
      light by connecting a battery to charcoal
      electrodes, producing a brilliant arc of light.
      Impractical for everyday use but proved the concept.
    parents: []

  vacuum_pump:
    title: "Better Vacuum Pumps (1865)"
    short_title: "Vacuum Pump"
    content: |
      Hermann Sprengel invented the mercury displacement
      pump, enabling the creation of much better vacuums.
      This was crucial for extending filament life.
    parents: []

  swan:
    title: "Swan's Carbon Filament (1878)"
    short_title: "Swan"
    content: |
      Joseph Swan demonstrated a working lamp using
      carbonised paper filament in a vacuum bulb.
      It worked but burned out within hours.
    parents: [arc_lamp, vacuum_pump]

  edison:
    title: "Edison's Bamboo Filament (1879)"
    short_title: "Edison"
    content: |
      Edison tested thousands of materials and found
      carbonised bamboo could last over 1200 hours.
      He also developed the complete electrical
      distribution system to make bulbs practical.
    parents: [arc_lamp, vacuum_pump]

  tungsten:
    title: "Tungsten Filament (1904)"
    short_title: "Tungsten"
    content: |
      Sandor Just and Franjo Hanaman patented the
      tungsten filament bulb. Tungsten's high melting
      point (3422C) made bulbs far more efficient
      and longer-lasting than carbon filaments.
    parents: [swan, edison]

  modern:
    title: "The Modern Bulb"
    short_title: "Modern"
    content: |
      Coiled tungsten filaments in argon gas became
      the standard. The incandescent bulb lit the
      world for over a century before giving way
      to LEDs and fluorescents.
    parents: [tungsten]
`,
  },
  {
    name: "Napoleon's March (1812)",
    yaml: `meta:
  title: "Napoleon's Russian Campaign"
  description: |
    The disastrous 1812 invasion of Russia
    that shattered the Grande Armee.
  start: [assembly]

nodes:
  assembly:
    title: "Grande Armee Assembles"
    short_title: "Assembly"
    content: |
      Napoleon gathered roughly 685,000 troops - the
      largest European army ever assembled - along the
      banks of the Neman River in June 1812.
    parents: []

  crossing:
    title: "Crossing the Neman"
    short_title: "Neman"
    content: |
      On June 24, the army crossed into Russian territory.
      Supply lines were already strained. Extreme heat
      and poor roads caused early losses to disease
      and desertion.
    parents: [assembly]

  smolensk:
    title: "Battle of Smolensk"
    short_title: "Smolensk"
    content: |
      The Russians retreated and burned Smolensk rather
      than let it be captured. Napoleon found only ruins.
      The scorched-earth strategy was taking its toll.
    parents: [crossing]

  borodino:
    title: "Battle of Borodino"
    short_title: "Borodino"
    content: |
      The bloodiest single day of the Napoleonic Wars.
      70,000 casualties on both sides. A pyrrhic victory
      for Napoleon - the Russian army withdrew intact.
    parents: [smolensk]

  moscow:
    title: "Moscow Burns"
    short_title: "Moscow"
    content: |
      Napoleon entered Moscow on September 14 expecting
      surrender. Instead, the city was set ablaze.
      He waited five weeks for a peace that never came.
    parents: [borodino]

  retreat:
    title: "The Great Retreat"
    short_title: "Retreat"
    content: |
      With winter approaching and no supplies, Napoleon
      ordered retreat on October 19. Temperatures dropped
      to -30C. Starvation, frost, and Cossack raids
      devastated the army.
    parents: [moscow]

  berezina:
    title: "Crossing the Berezina"
    short_title: "Berezina"
    content: |
      The army's remnants fought desperately to cross
      the Berezina River in November. Engineers built
      bridges in freezing water. Thousands drowned
      or were trampled in the chaos.
    parents: [retreat]

  remnant:
    title: "27,000 Return"
    short_title: "Return"
    content: |
      Of the 685,000 who set out, fewer than 27,000
      combat-effective soldiers returned. The campaign
      shattered Napoleon's aura of invincibility and
      set the stage for his eventual downfall.
    parents: [berezina]
`,
  },
];
