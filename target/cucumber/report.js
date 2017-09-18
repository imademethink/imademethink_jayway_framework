$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("REST_API_Testging_using_RESTAssured.feature");
formatter.feature({
  "id": "rest-api-testing-framework-using-java-rest-assured-or-jayway-libraries",
  "description": "Raise request(s) using REST Assured library\r\nValidate HTTP response code and parse JSON response using REST Assured library\r\nCross check the server logs for each REST API request\r\nMake sure to run the intended REST API based web application as pre-condition",
  "name": "REST API testing framework using Java REST Assured or JayWay Libraries",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "General init",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "Basic web application endpoint url is \"http://localhost:8080/imademethink/restfulapi/account_basic/\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Basic user details are",
  "keyword": "And ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "particular",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "d9aPass"
      ],
      "line": 12
    },
    {
      "cells": [
        "first_name",
        "Sheldon"
      ],
      "line": 13
    },
    {
      "cells": [
        "last_name",
        "Cooper"
      ],
      "line": 14
    },
    {
      "cells": [
        "gender",
        "m"
      ],
      "line": 15
    },
    {
      "cells": [
        "signup_secret_question_1_answer",
        "Tokyo"
      ],
      "line": 16
    },
    {
      "cells": [
        "signup_secret_question_2_answer",
        "Toystory"
      ],
      "line": 17
    }
  ]
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.general_init()"
});
formatter.result({
  "duration": 675865794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/imademethink/restfulapi/account_basic/",
      "offset": 39
    }
  ],
  "location": "BddStepDefinitions_REST_API.basic_web_application_endpoint_url_is(String)"
});
formatter.result({
  "duration": 5279009,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.basic_user_details_are(DataTable)"
});
formatter.result({
  "duration": 4596784,
  "status": "passed"
});
formatter.scenario({
  "id": "rest-api-testing-framework-using-java-rest-assured-or-jayway-libraries;valid-scenario-1",
  "description": "",
  "name": "Valid scenario 1",
  "keyword": "Scenario",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "Valid simple user management application is running",
  "keyword": "Given ",
  "line": 20
});
formatter.step({
  "name": "User performs GET signup parameters",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "User performs POST signup with email id \"Happy01@aaa.com\" to create account",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "User performs GET to activate account",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "User performs POST to signin account",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "User performs DELETE to signout account",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "Each user action should be successful",
  "keyword": "Then ",
  "line": 26
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.valid_simple_user_management_application_is_running()"
});
formatter.result({
  "duration": 10017020546,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_signup_parameters()"
});
formatter.result({
  "duration": 217108316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy01@aaa.com",
      "offset": 41
    }
  ],
  "location": "BddStepDefinitions_REST_API.user_performs_POST_signup_with_email_id_to_create_account(String)"
});
formatter.result({
  "duration": 328639455,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_to_activate_account()"
});
formatter.result({
  "duration": 150682289,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_POST_to_signin_account()"
});
formatter.result({
  "duration": 80381482,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_DELETE_to_signout_account()"
});
formatter.result({
  "duration": 97978177,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.each_user_action_should_be_successful()"
});
formatter.result({
  "duration": 10096013197,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "General init",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "Basic web application endpoint url is \"http://localhost:8080/imademethink/restfulapi/account_basic/\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Basic user details are",
  "keyword": "And ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "particular",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "d9aPass"
      ],
      "line": 12
    },
    {
      "cells": [
        "first_name",
        "Sheldon"
      ],
      "line": 13
    },
    {
      "cells": [
        "last_name",
        "Cooper"
      ],
      "line": 14
    },
    {
      "cells": [
        "gender",
        "m"
      ],
      "line": 15
    },
    {
      "cells": [
        "signup_secret_question_1_answer",
        "Tokyo"
      ],
      "line": 16
    },
    {
      "cells": [
        "signup_secret_question_2_answer",
        "Toystory"
      ],
      "line": 17
    }
  ]
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.general_init()"
});
formatter.result({
  "duration": 3642952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/imademethink/restfulapi/account_basic/",
      "offset": 39
    }
  ],
  "location": "BddStepDefinitions_REST_API.basic_web_application_endpoint_url_is(String)"
});
formatter.result({
  "duration": 141150,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.basic_user_details_are(DataTable)"
});
formatter.result({
  "duration": 209586,
  "status": "passed"
});
formatter.scenario({
  "id": "rest-api-testing-framework-using-java-rest-assured-or-jayway-libraries;valid-scenario-2",
  "description": "",
  "name": "Valid scenario 2",
  "keyword": "Scenario",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "Valid simple user management application is running",
  "keyword": "Given ",
  "line": 29
});
formatter.step({
  "name": "User performs GET signup parameters",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "User performs POST signup with email id \"Happy02@aaa.com\" to create account",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "User performs GET to activate account",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "User performs POST to signin account",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "User performs GET account profile",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "User performs PUT to modify account profile with first name \"Jack\" and last name \"Black\" and \"valid scenario 2\"",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "User performs GET account profile to match updated account profile",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "User performs DELETE to signout account",
  "keyword": "And ",
  "line": 37
});
formatter.step({
  "name": "Each user action should be successful",
  "keyword": "Then ",
  "line": 38
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.valid_simple_user_management_application_is_running()"
});
formatter.result({
  "duration": 138491638,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_signup_parameters()"
});
formatter.result({
  "duration": 115324223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy02@aaa.com",
      "offset": 41
    }
  ],
  "location": "BddStepDefinitions_REST_API.user_performs_POST_signup_with_email_id_to_create_account(String)"
});
formatter.result({
  "duration": 122519023,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_to_activate_account()"
});
formatter.result({
  "duration": 134803346,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_POST_to_signin_account()"
});
formatter.result({
  "duration": 91262432,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_account_profile()"
});
formatter.result({
  "duration": 120563453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jack",
      "offset": 61
    },
    {
      "val": "Black",
      "offset": 82
    },
    {
      "val": "valid scenario 2",
      "offset": 94
    }
  ],
  "location": "BddStepDefinitions_REST_API.user_performs_PUT_to_modify_account_profile_with_first_name_and_last_name(String,String,String)"
});
formatter.result({
  "duration": 102277262,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_account_profile_to_match_updated_account_profile()"
});
formatter.result({
  "duration": 70697739,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_DELETE_to_signout_account()"
});
formatter.result({
  "duration": 65091947,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.each_user_action_should_be_successful()"
});
formatter.result({
  "duration": 10014111574,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "General init",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "Basic web application endpoint url is \"http://localhost:8080/imademethink/restfulapi/account_basic/\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Basic user details are",
  "keyword": "And ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "particular",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "d9aPass"
      ],
      "line": 12
    },
    {
      "cells": [
        "first_name",
        "Sheldon"
      ],
      "line": 13
    },
    {
      "cells": [
        "last_name",
        "Cooper"
      ],
      "line": 14
    },
    {
      "cells": [
        "gender",
        "m"
      ],
      "line": 15
    },
    {
      "cells": [
        "signup_secret_question_1_answer",
        "Tokyo"
      ],
      "line": 16
    },
    {
      "cells": [
        "signup_secret_question_2_answer",
        "Toystory"
      ],
      "line": 17
    }
  ]
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.general_init()"
});
formatter.result({
  "duration": 2596304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/imademethink/restfulapi/account_basic/",
      "offset": 39
    }
  ],
  "location": "BddStepDefinitions_REST_API.basic_web_application_endpoint_url_is(String)"
});
formatter.result({
  "duration": 127890,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.basic_user_details_are(DataTable)"
});
formatter.result({
  "duration": 190339,
  "status": "passed"
});
formatter.scenario({
  "id": "rest-api-testing-framework-using-java-rest-assured-or-jayway-libraries;valid-scenario-3",
  "description": "",
  "name": "Valid scenario 3",
  "keyword": "Scenario",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "Valid simple user management application is running",
  "keyword": "Given ",
  "line": 41
});
formatter.step({
  "name": "User performs GET signup parameters",
  "keyword": "When ",
  "line": 42
});
formatter.step({
  "name": "User performs POST signup with email id \"Happy03@aaa.com\" to create account",
  "keyword": "And ",
  "line": 43
});
formatter.step({
  "name": "User performs GET to activate account",
  "keyword": "And ",
  "line": 44
});
formatter.step({
  "name": "User performs POST to signin account",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "User performs GET forget password to get secret questions",
  "keyword": "And ",
  "line": 46
});
formatter.step({
  "name": "User performs PUT to reset password",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "User performs DELETE to signout account",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "User performs POST to signin account",
  "keyword": "And ",
  "line": 49
});
formatter.step({
  "name": "Each user action should be successful",
  "keyword": "Then ",
  "line": 50
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.valid_simple_user_management_application_is_running()"
});
formatter.result({
  "duration": 190226520,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_signup_parameters()"
});
formatter.result({
  "duration": 97316482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy03@aaa.com",
      "offset": 41
    }
  ],
  "location": "BddStepDefinitions_REST_API.user_performs_POST_signup_with_email_id_to_create_account(String)"
});
formatter.result({
  "duration": 94162851,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_to_activate_account()"
});
formatter.result({
  "duration": 89534843,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_POST_to_signin_account()"
});
formatter.result({
  "duration": 77851475,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_forget_password_to_get_secret_questions()"
});
formatter.result({
  "duration": 58945079,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_PUT_to_reset_password()"
});
formatter.result({
  "duration": 70851720,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_DELETE_to_signout_account()"
});
formatter.result({
  "duration": 64292525,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_POST_to_signin_account()"
});
formatter.result({
  "duration": 69876074,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.each_user_action_should_be_successful()"
});
formatter.result({
  "duration": 10028756096,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "General init",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "Basic web application endpoint url is \"http://localhost:8080/imademethink/restfulapi/account_basic/\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Basic user details are",
  "keyword": "And ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "particular",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "d9aPass"
      ],
      "line": 12
    },
    {
      "cells": [
        "first_name",
        "Sheldon"
      ],
      "line": 13
    },
    {
      "cells": [
        "last_name",
        "Cooper"
      ],
      "line": 14
    },
    {
      "cells": [
        "gender",
        "m"
      ],
      "line": 15
    },
    {
      "cells": [
        "signup_secret_question_1_answer",
        "Tokyo"
      ],
      "line": 16
    },
    {
      "cells": [
        "signup_secret_question_2_answer",
        "Toystory"
      ],
      "line": 17
    }
  ]
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.general_init()"
});
formatter.result({
  "duration": 4119867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/imademethink/restfulapi/account_basic/",
      "offset": 39
    }
  ],
  "location": "BddStepDefinitions_REST_API.basic_web_application_endpoint_url_is(String)"
});
formatter.result({
  "duration": 137301,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.basic_user_details_are(DataTable)"
});
formatter.result({
  "duration": 192905,
  "status": "passed"
});
formatter.scenario({
  "id": "rest-api-testing-framework-using-java-rest-assured-or-jayway-libraries;invalid-scenario-1",
  "description": "",
  "name": "Invalid scenario 1",
  "keyword": "Scenario",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "Valid simple user management application is running",
  "keyword": "Given ",
  "line": 53
});
formatter.step({
  "name": "User performs GET signup parameters",
  "keyword": "When ",
  "line": 54
});
formatter.step({
  "name": "User performs POST signup with email id \"Sad01@aaa.com\" to create account",
  "keyword": "And ",
  "line": 55
});
formatter.step({
  "name": "User performs POST to signin account",
  "keyword": "And ",
  "line": 56
});
formatter.step({
  "name": "User performs DELETE to signout account with fake session id and \"invalid scenario 1\"",
  "keyword": "And ",
  "line": 57
});
formatter.step({
  "name": "Each user action should be successful",
  "keyword": "Then ",
  "line": 58
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.valid_simple_user_management_application_is_running()"
});
formatter.result({
  "duration": 85595476,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_signup_parameters()"
});
formatter.result({
  "duration": 69184868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sad01@aaa.com",
      "offset": 41
    }
  ],
  "location": "BddStepDefinitions_REST_API.user_performs_POST_signup_with_email_id_to_create_account(String)"
});
formatter.result({
  "duration": 77059324,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_POST_to_signin_account()"
});
formatter.result({
  "duration": 120363705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid scenario 1",
      "offset": 66
    }
  ],
  "location": "BddStepDefinitions_REST_API.user_performs_DELETE_to_signout_account_with_fake_session_id(String)"
});
formatter.result({
  "duration": 72445860,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.each_user_action_should_be_successful()"
});
formatter.result({
  "duration": 10013189822,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 7,
  "type": "background"
});
formatter.step({
  "name": "General init",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "Basic web application endpoint url is \"http://localhost:8080/imademethink/restfulapi/account_basic/\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Basic user details are",
  "keyword": "And ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "particular",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "d9aPass"
      ],
      "line": 12
    },
    {
      "cells": [
        "first_name",
        "Sheldon"
      ],
      "line": 13
    },
    {
      "cells": [
        "last_name",
        "Cooper"
      ],
      "line": 14
    },
    {
      "cells": [
        "gender",
        "m"
      ],
      "line": 15
    },
    {
      "cells": [
        "signup_secret_question_1_answer",
        "Tokyo"
      ],
      "line": 16
    },
    {
      "cells": [
        "signup_secret_question_2_answer",
        "Toystory"
      ],
      "line": 17
    }
  ]
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.general_init()"
});
formatter.result({
  "duration": 2241718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/imademethink/restfulapi/account_basic/",
      "offset": 39
    }
  ],
  "location": "BddStepDefinitions_REST_API.basic_web_application_endpoint_url_is(String)"
});
formatter.result({
  "duration": 147993,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.basic_user_details_are(DataTable)"
});
formatter.result({
  "duration": 198893,
  "status": "passed"
});
formatter.scenario({
  "id": "rest-api-testing-framework-using-java-rest-assured-or-jayway-libraries;invalid-scenario-2",
  "description": "",
  "name": "Invalid scenario 2",
  "keyword": "Scenario",
  "line": 60,
  "type": "scenario"
});
formatter.step({
  "name": "Valid simple user management application is running",
  "keyword": "Given ",
  "line": 61
});
formatter.step({
  "name": "User performs GET signup parameters",
  "keyword": "When ",
  "line": 62
});
formatter.step({
  "name": "User performs POST signup with email id \"Sad02@aaa.com\" to create account",
  "keyword": "And ",
  "line": 63
});
formatter.step({
  "name": "User performs GET to activate account",
  "keyword": "And ",
  "line": 64
});
formatter.step({
  "name": "User performs POST to signin account",
  "keyword": "And ",
  "line": 65
});
formatter.step({
  "name": "User performs GET account profile with content type as XML",
  "keyword": "And ",
  "line": 66
});
formatter.step({
  "name": "User performs DELETE to signout account with acceptable content type as XML",
  "keyword": "And ",
  "line": 67
});
formatter.step({
  "name": "Each user action should be successful",
  "keyword": "Then ",
  "line": 68
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.valid_simple_user_management_application_is_running()"
});
formatter.result({
  "duration": 153142148,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_signup_parameters()"
});
formatter.result({
  "duration": 67734873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sad02@aaa.com",
      "offset": 41
    }
  ],
  "location": "BddStepDefinitions_REST_API.user_performs_POST_signup_with_email_id_to_create_account(String)"
});
formatter.result({
  "duration": 92497709,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_to_activate_account()"
});
formatter.result({
  "duration": 115187779,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_POST_to_signin_account()"
});
formatter.result({
  "duration": 55535667,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_GET_account_profile_with_content_type_as_XML()"
});
formatter.result({
  "duration": 86125429,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.user_performs_DELETE_to_signout_account_with_acceptable_content_type_as_XML()"
});
formatter.result({
  "duration": 69235767,
  "status": "passed"
});
formatter.match({
  "location": "BddStepDefinitions_REST_API.each_user_action_should_be_successful()"
});
formatter.result({
  "duration": 10012709913,
  "status": "passed"
});
});