import React from 'react';
import { IconButton, Link, Stack, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { FaReddit } from 'react-icons/fa';
import { links } from '../data';
import { theme } from '../styles';

dayjs.extend(localizedFormat);

const Footer = ({ lastUpdated }) => {
  const formatted = dayjs(lastUpdated).format('L');

  return (
    <Stack>
      <Text
        spacing={2}
        justifySelf="flex-end"
        marginTop={12}
        color={theme.colors.darkWhite}
        fontSize={'0.8em'}
      >
        {`Last Updated ${formatted}`}
      </Text>

      <Link href={links.reddit} isExternal>
        <IconButton aria-label="Search database" fontSize={24} variant="link" icon={<FaReddit />} />
      </Link>
    </Stack>
  );
};

export default Footer;
