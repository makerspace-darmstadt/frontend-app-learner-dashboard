import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@edx/paragon';
import { Locked } from '@edx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import { hooks } from 'data/redux';
import messages from './messages';

export const UpgradeButton = ({ cardId }) => {
  const { upgradeUrl } = hooks.useCardCourseRunData(cardId);
  const { canUpgrade } = hooks.useCardEnrollmentData(cardId);
  const { formatMessage } = useIntl();
  return (
    <Button
      iconBefore={Locked}
      variant="outline-primary"
      disabled={!canUpgrade}
      as="a"
      href={upgradeUrl}
    >
      {formatMessage(messages.upgrade)}
    </Button>
  );
};
UpgradeButton.propTypes = {
  cardId: PropTypes.string.isRequired,
};
export default UpgradeButton;