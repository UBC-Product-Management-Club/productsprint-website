import React from 'react';
import './projects.css';
import Evan from '../../../assets/fellowship_members/evan.jpeg';

function Template() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img src={Evan} alt='Evan' />
              <div className='meta_p'>
                <p className='meta_name'>Evan Sandhu</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Taking over the Secondary Market with Ticketmaster!</strong>
          </h1>
          <div className='project_meta_intro'>
            <p>
              Hi! In this project, I took on the role of a PM for Ticketmaster,
              a North-American ticket sales and distribution company. My goal
              was to improve the secondary market buying and selling experience
              for users, mainly in regards to the resale of tickets, while also
              keeping in mind the need for Ticketmaster to gain revenue. Enjoy!
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='0'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/uP564egDekF5u8PS6aMHY?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <hr />
            <h2 class='text-xl'>
              <strong>Project Proposal</strong>
            </h2>
            <h3 class='text-lg'>
              <strong>
                Introducing the number one ticketing system in North America,
                Ticketmaster!
              </strong>
            </h3>
            <p>
              After nearly two years of being locked in my personal bubble due
              to the COVID-19 pandemic, I was ecstatic to finally get out and
              attend concerts again. As soon as ‘The Weeknd’ announced his tour
              date post-pandemic, I was quick to jump back on Ticketmaster and
              find the perfect ticket for me. What I love about Ticketmaster
              versus the next leading competitor is its ease of use. I can
              simply search for the artist using their app or website, select
              the city closest to me, and browse the various tickets
              immediately. I especially love the dynamic seating chart which
              allows the consumer to visualize where exactly their seats would
              be! Plus, going through Ticketmaster is carefree, I always know
              that I am buying a verified ticket!
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='1'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/axFouPjbkOzi7rHOfwxrS?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
          </div>

          <p></p>
        </div>

        <div className='project_container'>
          <h2 class='text-lg'>
            <strong>Project Objective</strong>
          </h2>
          <h3 class='text-lg'>Situation:</h3>
          <p>
            As a user purchasing resale tickets, I often assume I am getting the
            short end of the stick each time. Why? Well first, I can never tell
            whether I’m buying primary or secondary market tickets. In fact, I
            have to first search through the “filters” to ensure I’m not buying
            an overpriced resale ticket at first glance, and rather buying an
            unsold standard admission one. Next, though the filtration system is
            decent, I often find it hard to sort by specific seat types. Aside
            from sorting by price and ticket type, there is in fact no way to
            specifically sort by section or row number. Finally, if I were
            forced to buy a resale ticket, I am always afraid that I am
            overpaying, as scalpers are always looking to maximize their
            profits. This leaves me with a predicament, do I overpay to ensure
            that the ticket and payment delivery system is legit, or scour
            third-party marketplaces to get a better deal?
          </p>
          <h3 class='text-lg'>Assumptions:</h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Users find it difficult to choose specific preferences of ticket
                type.
              </p>
            </li>
            <li>
              <p>
                Users would prefer a more legitimate and cost-conscious way to
                purchase and sell tickets for resale.
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>Hypothesis:&nbsp;</h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Ticketmaster could improve its internal transaction system by
                providing a better UI/UX experience through the implementation
                of a marketplace. ( I will further develop my hypothesis
                throughout this project.)
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>Timeline:</h3>
          <p>I will spend at least 12 hours on this project:</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>4 hours of researching user needs (market research)</p>
            </li>
            <li>
              <p>2 hours developing a solution</p>
            </li>
            <li>
              <p>3 hours wireframing</p>
            </li>
            <li>
              <p>2 hours on touch-ups and securing a definitive conclusion</p>
            </li>
            <li>
              <p>1 hour of testing</p>
            </li>
          </ul>
          <hr />
          <h2 class='text-xl'>
            <strong>User Research</strong>
          </h2>
          <h3 class='text-lg'>
            <strong>Research Insights:</strong>
          </h3>
          <p>
            After reading an abundance of news articles, scouring r/ticketmaster
            and Twitter threads, and conducting market research with various age
            groups, it became clear that many people have a strong distaste
            toward Ticketmaster.
          </p>
          <p>
            During my research and interview periods, it was important to remain
            objective, and look at each situation with different hats on.
            Ticketmaster is a complex service, so any product changes must
            benefit the three main beneficiaries, sellers, buyers, and
            Ticketmaster themselves.&nbsp;&nbsp;&nbsp;
          </p>
          <p>
            Through the extensive research I conducted, it became clear what the
            two main issues people had were: Price and Security. More on this in
            the Solution phase.
          </p>
          <h3 class='text-lg'>
            <strong>User Persona:</strong>
          </h3>
          <p>
            Through user research, I found that Ticketmaster is an application
            used by all age groups, so it would not make sense to segment the
            audience with this metric. Instead, I chose those who consider
            themselves BOTH buyers and sellers of tickets.&nbsp;
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/xaLH51S8wOI4zUebzmJ1s?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>
            <strong>Opportunity Map:</strong>
          </h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/ifuEDvCMBIaImODQxsgh9?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            For the mapping process, it was important to understand how
            Ticketmaster would benefit from the needs, pains, and desires of
            consumers. Buyers want the lowest prices possible, advanced
            filtration, sales activity, and not having to use third-party
            applications. Sellers essentially wanted the same thing. However,
            the main pain point that I discovered (and the light bulb moment)
            was discovering that sellers did not necessarily need to sell their
            tickets for top dollar. Since the ticket economy is very illiquid,
            sellers often find themselves setting price floors lower and lower,
            severely undercutting each other. So, the outcome for Ticketmaster
            if they address the opportunities is simple, more sales volume =
            more fees they can collect!&nbsp;
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>Solutions</strong>
          </h2>
          <h3 class='text-lg'>Overhaul current UI to a marketplace&nbsp;</h3>
          <p>
            Though risky, through extensive research I believe that Ticketmaster
            changing their UI to a marketplace format will allow them to nail
            each consumer pain point in one central place. The marketplace is
            the core product, with its features allowing users to have a better
            experience when buying and selling tickets, and increasing sales
            volume within Ticketmaster leading to them generating more revenue
            from fees. Building a marketplace also hits on the point of security
            and legitimacy, as the implementation of it and the features below
            will enable users to use Ticketmaster over third-party applications
            and OTC transactions.&nbsp;
          </p>
          <h3 class='text-lg'>Add advanced filtration</h3>
          <p>
            Currently, in addition to the interactive seat mapping tool, the
            only filtration that a user can apply is in regards to the ticket
            type. For example, I can choose “Standard Ticket” which is an unsold
            primary ticket, “Verified Resale Ticket” which is a ticket being
            sold again by another user, and “RBC Music Ticket” specifically for
            RBC users who have linked their account. The advanced filtration
            will add features such as section number, row number, area (floor,
            lower-bowl, upper bowl, etc,) visibility, and much more. The main
            goal of the advanced filtration is ensuring that buyers are finding
            the perfect ticket for them, in terms of price comparison and
            seating charts, and that sellers can correctly value their tickets
            in comparison to other listings.&nbsp;
          </p>
          <h3 class='text-lg'>Add a sales activity</h3>
          <p>
            In addition to the advanced filtration which allows users to
            correctly value their tickets, a sales activity further ensures that
            users can establish fair market value, or “going-rate” of tickets.
            This is important for the price discovery of specific tickets, and
            great for both the scalping and buying economy of the ticketing
            industry.&nbsp;
          </p>
          <h3 class='text-lg'>
            Other important marketplace features which improve the UX
          </h3>
          <p>
            In-app secure ticket trading/transferring. Ability to bid/offer on
            specific tickets (tied to filtration) and the entire supply of
            tickets.&nbsp;
          </p>
          <h2 class='text-lg'>
            <strong>Feature Prioritization</strong>
          </h2>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='4'
            >
              <img
                src='https://tribe-s3-production.imgix.net/5gMYYjlGqg07OyRexTF1H?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h2 class='text-lg'>
            <strong>Value Proposition&nbsp;</strong>
          </h2>
          <p>
            Ticketmaster’s implementation of a marketplace allows for a mutually
            beneficial relationship between buyers, sellers, and Ticketmaster
            itself through the addition of new features which enable a better UX
            and transaction process.
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>Design: Mock Marketplace</strong>
          </h2>
          <h3 class='text-lg'>
            <strong>Product Requirements</strong>
          </h3>
          <p>
            1) At the top of the page you will find the Concert Name, and simple
            (but useful) quantitative information regarding the number of
            tickets available, number of tickets listed, current lowest price
            for a ticket by sellers (BIN), and top bid for any ticket (offer).
          </p>
          <p>
            2) Filters on the left side include the different ticket
            specifications
          </p>
          <p>
            3) Sorting on the right improves UX when searching for the perfect
            ticket
          </p>
          <p>
            <em>
              Note: Can select more than one filter, and can apply both filters
              and sorting simultaneously
            </em>
          </p>
          <p>
            4) The 2 main pages are Tickets (for sale, or not) and Activity (to
            view recent sales.) They show the Interactive Seating Chart that
            users mostly love (can be popped out.) Also includes relevant
            information such as the ticket type, section, row, price, and
            current bid.
          </p>
          <h3 class='text-lg'>
            <strong>Mock Design</strong>
          </h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='5'
            >
              <img
                src='https://tribe-s3-production.imgix.net/o2UK8WsxBRAhXYR6yRzbA?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>
            <strong>Tradeoffs/Risks</strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>Resource allocation (Opportunity Cost)</p>
            </li>
            <li>
              <p>Competitors ready for our failure</p>
            </li>
            <li>
              <p>Cost/Benefit</p>
            </li>
          </ul>
          <hr />
          <h2 class='text-xl'>
            <strong>Conclusion</strong>
          </h2>
          <p>
            I had quite the blast going through this entire process. Here are my
            key takeaways:
          </p>
          <p>
            1) Wear multiple hats, put yourself if the shoes of buyers, sellers,
            the company, competitors, and whoever else may be impacted by your
            decisions.
          </p>
          <p>2) Most problems are human issues, not UI, UX, Product, etc.</p>
          <p>3) Research, Research, Research.</p>
          <p>4) User Persona should be an average person!</p>
          <p>
            5) Your product has one goal, make money! Improve revenue streams,
            don't take away from them!
          </p>
          <p>🎫 🎟️</p>
        </div>
      </div>
    </div>
  );
}

export default Template;
