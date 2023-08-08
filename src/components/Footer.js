import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Text, Stack, Wrap, IconButton, Link } from '@chakra-ui/react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { FaReddit } from 'react-icons/fa';
import { theme } from '../styles';

const { colors } = theme;
dayjs.extend(localizedFormat);

const Footer = ({ lastUpdated }) => {
  const formatted = dayjs(lastUpdated).format('L');

  return (
    <Stack>
      <Text
        spacing={2}
        justifySelf="flex-end"
        marginTop={12}
        color={colors.darkWhite}
        fontSize={'0.8em'}
      >
        {`Last Updated ${formatted}`}
      </Text>

      <Link href="https://www.reddit.com/r/hornstrength/" isExternal>
        <IconButton aria-label="Search database" fontSize={24} variant="link" icon={<FaReddit />} />
      </Link>
    </Stack>
  );
};

export default Footer;
