import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Adetola Iyanuoluwa',
  description: 'Portfolio of B2B SaaS content writing projects by Adetola Iyanuoluwa.',
};

const PORTFOLIO = [
  {
    category: 'Comparison & Alternatives',
    articles: [
      {
        title: '5 Top Hive Alternatives for Creative Agencies in 2026',
        brief: 'Hive lacks white-label features and charges extra for essentials like time tracking and approvals. A breakdown of five better-fit tools for client-facing agency work.',
        url: 'https://www.manyrequests.com/blog/hive-alternatives',
        client: 'ManyRequests',
      },
      {
        title: 'Top 5 Design Approval Software for Creative Agencies in 2026',
        brief: 'Scattered feedback across email and Slack kills creative workflows. A comparison of five platforms that centralise design feedback, approvals, and revisions.',
        url: 'https://www.manyrequests.com/blog/design-approval-software',
        client: 'ManyRequests',
      },
      {
        title: 'Jira vs ClickUp for Creative Agencies in 2026',
        brief: 'Both tools promise to organise your work — but which one actually fits the way creative agencies operate? A head-to-head breakdown.',
        url: 'https://www.manyrequests.com/blog/jira-vs-clickup',
        client: 'ManyRequests',
      },
      {
        title: 'Teamwork vs Asana vs ManyRequests: Which Fits Creative Agencies Best in 2026',
        brief: 'Three popular project management tools compared across client management, billing, and collaboration — so agencies can choose the right fit.',
        url: 'https://www.manyrequests.com/blog/teamwork-vs-asana',
        client: 'ManyRequests',
      },
      {
        title: '4 Best WorkflowMax Alternatives for Creative Agencies in 2026',
        brief: 'WorkflowMax is sunsetting. Here are four alternatives that cover job management, time tracking, and invoicing for creative agencies.',
        url: 'https://www.manyrequests.com/blog/workflowmax-alternatives',
        client: 'ManyRequests',
      },
      {
        title: 'HoneyBook vs QuickBooks for Creative Agencies: Which to Choose in 2026?',
        brief: 'One is built for client management; the other for accounting. A side-by-side comparison to help creative agencies pick the right financial tool.',
        url: 'https://www.manyrequests.com/blog/honeybook-vs-quickbooks',
        client: 'ManyRequests',
      },
      {
        title: "Don't Build From Scratch: 5 Best Softr Alternatives in 2026",
        brief: 'Softr is popular but not for everyone. A roundup of five no-code platform alternatives for agencies looking to build client portals and internal tools.',
        url: 'https://www.manyrequests.com/blog/softr-alternatives',
        client: 'ManyRequests',
      },
      {
        title: 'Top 6 WordPress Client Portal Plugins for Creative Agencies in 2026',
        brief: 'A curated list of the best WordPress plugins for building client portals — covering file sharing, project updates, invoicing, and approvals.',
        url: 'https://www.manyrequests.com/blog/wordpress-client-portal-plugin',
        client: 'ManyRequests',
      },
    ],
  },
  {
    category: 'Strategy & Guides',
    articles: [
      {
        title: 'The Complete Creative Agency Sales Process [2026]',
        brief: 'A comprehensive walkthrough of every stage in a repeatable agency sales process — from lead generation and discovery calls to proposals and closing.',
        url: 'https://www.manyrequests.com/blog/agency-sales-process',
        client: 'ManyRequests',
      },
      {
        title: 'Client Acquisition Guide for Creative Agencies — Full 2026 Edition',
        brief: 'A full-length guide on attracting and converting high-value clients, covering positioning, outreach channels, and closing strategies for creative agencies.',
        url: 'https://www.manyrequests.com/blog/client-acquisition-guide',
        client: 'ManyRequests',
      },
      {
        title: 'Productized Consulting: The Ultimate Guide for Creative Agencies in 2026',
        brief: 'How creative agencies can package their expertise into fixed-scope, fixed-price offers — reducing scope creep and scaling revenue without hiring.',
        url: 'https://www.manyrequests.com/blog/productized-consulting',
        client: 'ManyRequests',
      },
      {
        title: 'Mastering KPI Reports for Creative Teams in 2026',
        brief: 'The metrics that actually matter for creative agencies — how to build KPI reports that communicate value to clients and drive smarter internal decisions.',
        url: 'https://www.manyrequests.com/blog/kpi-reports',
        client: 'ManyRequests',
      },
      {
        title: 'This Client Follow-Up System Will Help You Close More Sales',
        brief: 'Most agencies lose deals not from bad proposals but from poor follow-up. A practical follow-up system designed to keep warm leads moving toward a yes.',
        url: 'https://www.manyrequests.com/blog/client-follow-up-system',
        client: 'ManyRequests',
      },
      {
        title: 'Business Information Management for Growing Creative Agencies in 2026',
        brief: 'How to organise, store, and use business data effectively as your agency scales — from client records and project files to financial and performance data.',
        url: 'https://www.manyrequests.com/blog/business-information-management',
        client: 'ManyRequests',
      },
      {
        title: 'Workflow vs Process: Which Matters More for Your Creative Agency?',
        brief: 'A clear distinction between workflows and processes — and how understanding the difference helps agencies deliver consistent, high-quality work.',
        url: 'https://www.manyrequests.com/blog/workflow-vs-process',
        client: 'ManyRequests',
      },
      {
        title: 'How to Get Clients on Facebook: A Guide For Creative Agencies in 2026',
        brief: 'A practical guide to using Facebook Groups, ads, and direct outreach to attract and convert creative agency clients — without feeling spammy.',
        url: 'https://www.manyrequests.com/blog/how-to-get-clients-on-facebook',
        client: 'ManyRequests',
      },
    ],
  },
];

export default function WorkPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Page header */}
        <div className="border-t border-border pt-8 mb-16">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Long-form articles and guides written for B2B SaaS and agency brands.
            All pieces are SEO-optimised and conversion-focused.
          </p>
        </div>

        {/* Grouped sections */}
        <div className="space-y-20">
          {PORTFOLIO.map((group) => (
            <div key={group.category}>
              <h2
                className="font-serif text-2xl md:text-3xl font-bold mb-10"
                style={{ letterSpacing: '-0.01em' }}
              >
                {group.category}
              </h2>

              <div className="divide-y divide-border">
                {group.articles.map((article) => (
                  <a
                    key={article.url}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-8 py-6 hover:opacity-80 transition-opacity duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {article.client}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg md:text-xl font-bold mb-2 leading-snug group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {article.brief}
                      </p>
                    </div>

                    <span
                      className="shrink-0 text-xs font-bold uppercase tracking-wider mt-1 whitespace-nowrap"
                      style={{ color: '#e07a5f' }}
                    >
                      Read →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="border-l-4 pl-6 py-2 max-w-xl" style={{ borderColor: '#e07a5f' }}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Want content like this?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Let&apos;s talk about what I can write for your brand.
            </p>
            <a
              href="mailto:adetolaiyanuoluwa3737@gmail.com"
              className="px-6 sm:px-8 py-3 sm:py-4 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:scale-105 inline-block rounded-sm"
              style={{ backgroundColor: '#e07a5f', color: '#ffffff' }}
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
