"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestedByFront = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _interested_by_front_styles = require("./interested_by_front_styles");

var useStyles = (0, _reactJss.createUseStyles)(_interested_by_front_styles.styles);

var InterestedByFrontComponent = function InterestedByFrontComponent(_ref) {
  var interestedBy = _ref.data.interestedBy,
      profileCardFrontTypographyProps = _ref.profileCardFrontTypographyProps,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;
  var classes = useStyles();
  return _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, {
    customClasses: {
      container: (0, _classnames.default)(classes.container, customClasses.container)
    }
  }, _react.default.createElement(_center_content_container.CenterContentContainer, null, _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, (0, _extends2.default)({
    classes: {
      container: classes.typography
    }
  }, profileCardFrontTypographyProps), _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "InterestedBy.front.content",
    defaultMessage: "I'm interested by {interestedBy}",
    values: {
      interestedBy: interestedBy
    }
  }))));
};

var InterestedByFront = InterestedByFrontComponent;
exports.InterestedByFront = InterestedByFront;