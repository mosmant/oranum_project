Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  @REQ-1
  Scenario Outline: Search for keywords
    Given I am on the Oranum website
    When I enter "<keyword>" into the search box
    Then the search results should contain "<keyword>"

    Examples:
      | keyword |
      | Matt    |
      | Myst    |
      | Ann     |
      | psy     |

  @REQ-2
  Scenario Outline: Search for specific psychic profile
    Given I am on the Oranum website
    When I enter "<profileName>" into the search box
    Then the "<profileName>"'s profile should be displayed

    Examples:
      | profileName    |
      | MattWarren     |
      | MysticMilena   |
      | EternalFlame   |

  @REQ-3
  Scenario Outline: Validate button triggers Sign up overlay
    Given I am on a live psychic's page
    When I click on the '<buttonName>' button
    Then the 'Sign up' overlay should be displayed

    Examples:
      | buttonName        |
      | Get Credits       |
      | Add to favorites  |
      | Surprise buttons  |
      | Call me button    |
      | Buy credits button|