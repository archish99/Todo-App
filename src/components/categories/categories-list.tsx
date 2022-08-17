import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { GeneralStackParamsList } from "../../navigation/general-stack/general-stack";
import { RootState } from "../../redux/store";
import CategoryCard from "./category-card";

const CategoriesList: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories);

  const navigation =
    useNavigation<NativeStackNavigationProp<GeneralStackParamsList>>();

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryCard
          item={item}
          onPress={() => navigation.navigate("category", { item })}
        />
      )}
      horizontal
      mt={4}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoriesList;
