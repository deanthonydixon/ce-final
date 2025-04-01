// app/index.js
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function YieldDashboard() {
  // In a real app, you would fetch this data from an API
  const portfolioData = {
    totalValue: 50000,
    totalYield: 750,
    performance: 15.8,
  };

  const topYields = [
    { protocol: "Arbitrum", token: "USDC", via: "Aave", apy: 15.1 },
    { protocol: "Optimism", token: "USDT", via: "Curve", apy: 12.8 },
    { protocol: "Polygon", token: "DAI", via: "Balancer", apy: 11.5 },
  ];

  const assetAllocation = [
    { token: "USDC", percentage: 40 },
    { token: "USDT", percentage: 30 },
    { token: "DAI", percentage: 20 },
    { token: "Other", percentage: 10 },
  ];

  // Sample chart data - in a real app, this would come from historical data
  const chartData = {
    labels: [], // Hide labels for pixel-art style
    datasets: [
      {
        data: [20, 45, 28, 15, 35, 40, 30],
        color: () => "#4ADE80",
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Group 7 YieldDashboard</Text>
        <Text style={styles.headerSubtitle}>
          Track and optimize your yields in real-time
        </Text>
      </View>

      <View style={styles.contentContainer}>
        {/* Portfolio Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Portfolio Overview</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Total Value</Text>
              <Text style={styles.statValueGreen}>
                ${portfolioData.totalValue.toLocaleString()}
              </Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Total Yield</Text>
              <Text style={styles.statValueGreen}>
                ${portfolioData.totalYield}
              </Text>
            </View>
          </View>

          <View style={styles.chartContainer}>
            <LineChart
              data={chartData}
              width={Dimensions.get("window").width - 80}
              height={120}
              chartConfig={{
                backgroundColor: "#1E2232",
                backgroundGradientFrom: "#1E2232",
                backgroundGradientTo: "#1E2232",
                decimalPlaces: 0,
                color: () => "#4ADE80",
                style: {
                  borderRadius: 8,
                },
                propsForDots: {
                  r: "0", // Hide dots for pixel-art style
                },
              }}
              bezier
              style={styles.chart}
              withHorizontalLines={false}
              withVerticalLines={false}
              withDots={false}
              withShadow={false}
              withInnerLines={false}
              withOuterLines={false}
              yAxisLabel=""
              yAxisSuffix=""
            />
            <View style={styles.performanceContainer}>
              <Text style={styles.performanceLabel}>30-Day Performance</Text>
              <Text style={styles.performanceValue}>
                +{portfolioData.performance}%
              </Text>
            </View>
          </View>

          <Text style={styles.infoText}>
            Get started with your smart wallet to begin earning yields
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Smart Wallet</Text>
          </TouchableOpacity>
        </View>

        {/* Top Yields Section */}
        <View style={styles.topYieldsSection}>
          <View style={styles.topYieldsHeader}>
            <Text style={styles.sectionTitle}>TOP YIELDS</Text>
            <Text style={styles.percentSymbol}>%</Text>
          </View>

          {topYields.map((item, index) => (
            <View key={index} style={styles.yieldItem}>
              <View>
                <Text style={styles.protocolText}>{item.protocol}</Text>
                <Text style={styles.tokenText}>{item.token}</Text>
                <Text style={styles.viaText}>via {item.via}</Text>
              </View>
              <Text style={styles.apyText}>
                {item.apy}%<Text style={styles.apyLabel}> APY</Text>
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Asset Allocation Section */}
      <View style={styles.assetAllocationSection}>
        <View style={styles.assetHeaderRow}>
          <Text style={styles.sectionTitle}>ASSET ALLOCATION</Text>
          <Ionicons name="time-outline" size={24} color="#4ADE80" />
        </View>

        <View style={styles.allocationContainer}>
          {assetAllocation.map((asset, index) => (
            <View key={index} style={styles.allocationItem}>
              <Text style={styles.assetName}>{asset.token}</Text>
              <Text style={styles.assetPercentage}>{asset.percentage}%</Text>
              <View style={styles.progressBarContainer}>
                <View
                  style={[
                    styles.progressBar,
                    { width: `${asset.percentage}%` },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121420",
    paddingTop: 60,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#A0A0A0",
  },
  contentContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  section: {
    backgroundColor: "#1E2232",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2F3647",
    flex: 1,
    marginRight: 10,
  },
  topYieldsSection: {
    backgroundColor: "#1E2232",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2F3647",
    width: "35%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statBox: {
    backgroundColor: "#2A2F42",
    borderRadius: 8,
    padding: 16,
    width: "48%",
  },
  statLabel: {
    fontSize: 14,
    color: "#A0A0A0",
    marginBottom: 5,
  },
  statValueGreen: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4ADE80",
  },
  chartContainer: {
    backgroundColor: "#2A2F42",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  chart: {
    borderRadius: 8,
    marginVertical: 8,
  },
  performanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  performanceLabel: {
    fontSize: 14,
    color: "#A0A0A0",
  },
  performanceValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4ADE80",
  },
  infoText: {
    fontSize: 14,
    color: "#A0A0A0",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2A2F42",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  topYieldsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  percentSymbol: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4ADE80",
  },
  yieldItem: {
    backgroundColor: "#2A2F42",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  protocolText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  tokenText: {
    fontSize: 16,
    color: "white",
  },
  viaText: {
    fontSize: 12,
    color: "#A0A0A0",
  },
  apyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4ADE80",
  },
  apyLabel: {
    fontSize: 12,
    color: "#4ADE80",
  },
  assetAllocationSection: {
    backgroundColor: "#1E2232",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#2F3647",
    marginHorizontal: 16,
  },
  assetHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  allocationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allocationItem: {
    width: "22%",
  },
  assetName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  assetPercentage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4ADE80",
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: "#2A2F42",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4ADE80",
  },
});
