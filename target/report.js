$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Amezon.feature");
formatter.feature({
  "name": "To validate the Amezon login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@feature01"
    }
  ]
});
formatter.scenario({
  "name": "To validate the invaild Emaild and invaild password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature01"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to launch the chromebrowser and hit the Amezon url",
  "keyword": "Given "
});
formatter.match({
  "location": "AmezonStepDefinition.userHasToLaunchTheChromebrowserAndHitTheAmezonUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the invaild emailId to userName text box",
  "keyword": "When "
});
formatter.match({
  "location": "AmezonStepDefinition.userHasToPassTheInvaildEmailIdToUserNameTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmezonStepDefinition.toClickTheContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the invaild password to password text box",
  "keyword": "And "
});
formatter.match({
  "location": "AmezonStepDefinition.userHasToPassTheInvaildPasswordToPasswordTextBox()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.AmezonStepDefinition.userHasToPassTheInvaildPasswordToPasswordTextBox(AmezonStepDefinition.java:36)\r\n\tat ✽.user has to pass the invaild password to password text box(src/test/resources/Amezon.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to click the sign button",
  "keyword": "And "
});
formatter.match({
  "location": "AmezonStepDefinition.userHasToClickTheSignButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/fb.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@feature01"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate invaild username and invaild password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@feature01"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "To pass the invaild user name to username text box",
  "rows": [
    {
      "cells": [
        "email1",
        "sinamika123@gmail.com"
      ]
    },
    {
      "cells": [
        "email2",
        "karuppasamythiyagu@gmail.com"
      ]
    },
    {
      "cells": [
        "email3",
        "mugesh123@gmail.com"
      ]
    },
    {
      "cells": [
        "email4",
        "kanna@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.to_pass_the_invaild_user_name_to_username_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the invaild password to password text box",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "123456",
        "7654321",
        "2345678"
      ]
    },
    {
      "cells": [
        "java",
        "selenium",
        "cucumber"
      ]
    },
    {
      "cells": [
        "testng",
        "datatable",
        "pom"
      ]
    },
    {
      "cells": [
        "inheritance",
        "abstraction",
        "opps"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.to_pass_the_invaild_password_to_password_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_has_to_click_the_continue_button()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.StepDefinition.user_has_to_click_the_continue_button(StepDefinition.java:48)\r\n\tat ✽.user has to click the continue button(src/test/resources/fb.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user has to pass the bulk\"\u003cuserName\u003e\" of datas to userName field",
  "keyword": "When "
});
formatter.step({
  "name": "user has to pass the bulk \"\u003cpassword\u003e\"of datas to password field",
  "keyword": "And "
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "karuppasamy1798@gmail.com",
        "karuppasamy1798"
      ]
    },
    {
      "cells": [
        "ajsamy2156@gmail.com",
        "ajsamy2156"
      ]
    },
    {
      "cells": [
        "testng@gmail.com",
        "testng"
      ]
    },
    {
      "cells": [
        "cucumber@gmail.com",
        "cucumber"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@feature01"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user has to pass the bulk\"karuppasamy1798@gmail.com\" of datas to userName field",
  "keyword": "When "
});
formatter.match({
  "location": "OutLineStepDefinition.user_has_to_pass_the_bulk_of_datas_to_userName_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the bulk \"karuppasamy1798\"of datas to password field",
  "keyword": "And "
});
formatter.match({
  "location": "OutLineStepDefinition.user_has_to_pass_the_bulk_of_datas_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@feature01"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user has to pass the bulk\"ajsamy2156@gmail.com\" of datas to userName field",
  "keyword": "When "
});
formatter.match({
  "location": "OutLineStepDefinition.user_has_to_pass_the_bulk_of_datas_to_userName_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the bulk \"ajsamy2156\"of datas to password field",
  "keyword": "And "
});
formatter.match({
  "location": "OutLineStepDefinition.user_has_to_pass_the_bulk_of_datas_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@feature01"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user has to pass the bulk\"testng@gmail.com\" of datas to userName field",
  "keyword": "When "
});
formatter.match({
  "location": "OutLineStepDefinition.user_has_to_pass_the_bulk_of_datas_to_userName_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the bulk \"testng\"of datas to password field",
  "keyword": "And "
});
formatter.match({
  "location": "OutLineStepDefinition.user_has_to_pass_the_bulk_of_datas_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the bulk of datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@feature01"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user has to pass the bulk\"cucumber@gmail.com\" of datas to userName field",
  "keyword": "When "
});
formatter.match({
  "location": "OutLineStepDefinition.user_has_to_pass_the_bulk_of_datas_to_userName_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the bulk \"cucumber\"of datas to password field",
  "keyword": "And "
});
formatter.match({
  "location": "OutLineStepDefinition.user_has_to_pass_the_bulk_of_datas_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});