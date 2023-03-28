import React from "react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import "./AllTransactions.css";
import GoalTransaction from "../SingleTransaction/GoalTransaction";

import {
  Box,
  Flex,
  List,
  ListItem,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";

const FilterBar = (props) => {
  const {
    subCategories,
    handleCategoryChange,
    selectedDates,
    setSelectedDates,
    handleAccountClick,
    totalAccountBalance,
    bankAccounts,
  } = props;

  return subCategories.length > 0 ? (
    <List w={"100%"}>
      <ListItem w="100%">
        <Text>
          <Box as="span" fontSize={"2xl"} flex="1" textAlign={"left"}>
            Your Accounts
          </Box>
        </Text>
        <Flex direction={"column"} paddingTop={"1em"}>
          <Box bg={"purple.200"} borderRadius={"20px"}>
            {bankAccounts.length > 0 ? (
              <Button
                size={"lg"}
                w={"100%"}
                variant={"ghost"}
                value={"all"}
                onClick={(e) => {
                  handleAccountClick(e);
                }}
              >
                All Accounts|
                {totalAccountBalance.toFixed(2)}
              </Button>
            ) : (
              <Button size={"lg"} w={"100%"} variant={"ghost"} value={"all"}>
                No Connected Accounts
              </Button>
            )}
          </Box>
          {bankAccounts.map((account, idx) => {
            let varyColor = 200;
            if (idx % 2 === 0) {
              varyColor = 100;
            }
            return (
              <Box
                bg={`purple.${varyColor}`}
                borderRadius={"20"}
                key={account.account_id}
              >
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  w={"100%"}
                  value={account.id}
                  onClick={(e) => {
                    handleAccountClick(e);
                  }}
                >
                  {account.account_name}|{account.available_balance}
                </Button>
              </Box>
            );
          })}
        </Flex>
      </ListItem>
      {bankAccounts.length > 0 ? (
        <>
          <ListItem paddingTop={"1em"}>
            <Text>
              <Box fontSize={"2xl"} flex="1" textAlign={"left"}>
                Filters
              </Box>
            </Text>
            <Flex direction={"column"}>
              <Box>
                <Text fontSize={"lg"}>Category</Text>

                <Select
                  id="category"
                  onChange={(e) => {
                    handleCategoryChange(e);
                  }}
                >
                  <option>None</option>
                  {subCategories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.sub_category_name}
                      </option>
                    );
                  })}
                </Select>
              </Box>
              <Box>
                <Text fontSize={"lg"}>Date</Text>
                <RangeDatepicker
                  selectedDates={selectedDates}
                  onDateChange={setSelectedDates}
                  propsConfigs={{
                    inputProps: {
                      size: "lg",
                      _active: {
                        border: "purple",
                      },
                      _visited: {
                        border: "purple",
                      },
                      _focus: {
                        border: "none",
                      },
                    },
                  }}
                />
              </Box>
            </Flex>
          </ListItem>
          <ListItem paddingTop={"2em"}>
            <GoalTransaction />
          </ListItem>
        </>
      ) : (
        <></>
      )}
    </List>
  ) : (
    <></>
  );
};

export default FilterBar;
