function updateData(year) {
  d3.csv("gc_clim_pudding_v5.csv", function (data) {
    var json_data = { name: "root", children: [] };

    var uniqueSimpTypes = Array.from(
      new Set(data.map((item) => item[`type_${year}_simp`]))
    );

    uniqueSimpTypes.forEach(function (simp_type) {
      var type_node = { name: simp_type, children: [] };

      if (simp_type === "Temperate") {
        type_node["color"] = "rgba(88, 249, 104, .2)";
      } else if (simp_type === "Arid") {
        type_node["color"] = "rgba(249, 88, 88, .2)";
      } else if (simp_type === "Tropical") {
        type_node["color"] = "rgba(88, 152, 249, .2)";
      } else if (simp_type === "Cold") {
        type_node["color"] = "rgba(178, 88, 249, .2)";
      }

      var uniqueTypeColors = Array.from(
        new Set(
          data
            .filter((item) => item[`type_${year}_simp`] === simp_type)
            .map((item) => [item[`type_${year}`], item[`color_${year}`]])
        )
      );

      uniqueTypeColors.forEach(function (item) {
        var ty = item[0];
        var color = item[1];

        var city_node = {
          name: ty.trim(),
          color: color.substring(3),
          children: [],
        };

        // Iterate over individual cities
        data
          .filter(
            (cityItem) =>
              cityItem[`type_${year}_simp`] === simp_type &&
              cityItem[`type_${year}`] === ty
          )
          .forEach(function (cityItem) {
            var child_node = {
              name: cityItem.name.trim(),
              continent: cityItem.continent,
              color: cityItem[`color_${year}`].substring(3),
              size: 1500,
              year: year,
            };

            city_node["children"].push(child_node);
          });

        type_node["children"].push(city_node);
      });

      json_data["children"].push(type_node);
    });

    // Convert the object to JSON
    var json_output = JSON.stringify(json_data, null, 2);

    console.log(json_output);
    // You can use the json_output as needed, for example, update your visualization with this data.
  });
}
// Use json_output as needed in your JavaScript application.
// For example, you can write it to a file or send it to a server.
function updateDataContinent(year, cont) {
  d3.csv("gc_clim_pudding_v5.csv", function (data) {
    var json_data = { name: "root", children: [] };

    var uniqueSimpTypes = Array.from(
      new Set(data.map((item) => item[`type_${year}_simp`]))
    );

    uniqueSimpTypes.forEach(function (simp_type) {
      var type_node = { name: simp_type, children: [] };

      if (simp_type === "Temperate") {
        type_node["color"] = "rgba(88, 249, 104, .2)";
      } else if (simp_type === "Arid") {
        type_node["color"] = "rgba(249, 88, 88, .2)";
      } else if (simp_type === "Tropical") {
        type_node["color"] = "rgba(88, 152, 249, .2)";
      } else if (simp_type === "Cold") {
        type_node["color"] = "rgba(178, 88, 249, .2)";
      }

      var continent = cont; // Change this to your specific condition

      var uniqueTypeColors = Array.from(
        new Set(
          data
            .filter((item) =>
              continent === cont && item.continent === continent
                ? item[`type_2070_simp`] === simp_type
                : item[`type_2023_simp`] === simp_type
            )
            .map((item) => [
              continent === cont && item.continent === continent
                ? item[`type_2070`]
                : item[`type_2023`],
              continent === cont && item.continent === continent
                ? item[`color_2070`]
                : item[`color_2023`],
            ])
        )
      );

      uniqueTypeColors.forEach(function (item) {
        var ty = item[0];
        var color = item[1];

        var city_node = {
          name: ty.trim(),
          color: color.substring(3),
          children: [],
        };

        // Iterate over individual cities
        data
          .filter((cityItem) =>
            continent === cont && cityItem.continent === continent
              ? cityItem[`type_2070_simp`] === simp_type &&
                cityItem[`type_2070`] === ty
              : cityItem[`type_2023_simp`] === simp_type &&
                cityItem[`type_2023`] === ty
          )
          .forEach(function (cityItem) {
            var child_node = {
              name: cityItem.name.trim(),
              continent: cityItem.continent,
              color:
                continent === cont && cityItem.continent === continent
                  ? cityItem[`color_2070`].substring(3)
                  : cityItem[`color_2023`].substring(3),
              size: 1500,
              year:
                continent === cont && cityItem.continent === continent
                  ? 2070
                  : year,
            };

            city_node["children"].push(child_node);
          });

        type_node["children"].push(city_node);
      });

      json_data["children"].push(type_node);
    });

    // Convert the object to JSON
    var json_output = JSON.stringify(json_data, null, 2);

    console.log(json_output);
    // You can use the json_output as needed, for example, update your visualization with this data.
  });
}
// Use json_output as needed in your JavaScript application.
// For example, you can write it to a file or send it to a server.
function updateDataCity(year, city) {
  d3.csv("gc_clim_pudding_v5.csv", function (data) {
    var json_data = { name: "root", children: [] };

    var uniqueSimpTypes = Array.from(
      new Set(data.map((item) => item[`type_${year}_simp`]))
    );

    uniqueSimpTypes.forEach(function (simp_type) {
      var type_node = { name: simp_type, children: [] };

      if (simp_type === "Temperate") {
        type_node["color"] = "rgba(88, 249, 104, .2)";
      } else if (simp_type === "Arid") {
        type_node["color"] = "rgba(249, 88, 88, .2)";
      } else if (simp_type === "Tropical") {
        type_node["color"] = "rgba(88, 152, 249, .2)";
      } else if (simp_type === "Cold") {
        type_node["color"] = "rgba(178, 88, 249, .2)";
      }

      var uniqueTypeColors = Array.from(
        new Set(
          data
            .filter((item) => item[`type_${year}_simp`] === simp_type)
            .map((item) => [item[`type_${year}`], item[`color_${year}`]])
        )
      );

      uniqueTypeColors.forEach(function (item) {
        var ty = item[0];
        var color = item[1];

        var city_node = {
          name: ty.trim(),
          color: color.substring(3),
          children: [],
        };

        // Iterate over individual cities
        data
          .filter(
            (cityItem) =>
              cityItem[`type_${year}_simp`] === simp_type &&
              cityItem[`type_${year}`] === ty
          )
          .forEach(function (cityItem) {
            var child_node = {
              name: cityItem.name.trim(),
              continent: cityItem.continent,
              color:
                cityItem.name === city
                  ? cityItem[`color_2070`].substring(3)
                  : cityItem[`color_${year}`].substring(3),
              size: 1500,
              year: cityItem.name === city ? 2070 : year,
            };

            city_node["children"].push(child_node);
          });

        type_node["children"].push(city_node);
      });

      json_data["children"].push(type_node);
    });

    // Convert the object to JSON
    var json_output = JSON.stringify(json_data, null, 2);

    console.log(json_output);
    // You can use the json_output as needed, for example, update your visualization with this data.
  });
}
