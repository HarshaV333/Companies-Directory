const companiesData = [
  { "id": 1, "name": "TechNova Solutions", "industry": "Information Technology", "location": "Hyderabad, India", "founded": 2015, "employees": 250, "email": "contact@technova.com", "website": "https://www.technova.com" },
  { "id": 2, "name": "CodeSphere Technologies", "industry": "Information Technology", "location": "Bangalore, India", "founded": 2018, "employees": 180, "email": "info@codesphere.com", "website": "https://www.codesphere.com" },
  { "id": 3, "name": "InnoWave Systems", "industry": "Information Technology", "location": "Pune, India", "founded": 2020, "employees": 95, "email": "support@innowave.com", "website": "https://www.innowave.com" },
  { "id": 4, "name": "DataHive Analytics", "industry": "Information Technology", "location": "Hyderabad, India", "founded": 2019, "employees": 200, "email": "hello@datahive.com", "website": "https://www.datahive.com" },
  { "id": 5, "name": "PixelSoft Labs", "industry": "Information Technology", "location": "Chennai, India", "founded": 2016, "employees": 120, "email": "contact@pixelsoft.com", "website": "https://www.pixelsoft.com" },

  { "id": 6, "name": "MediCore Pharma", "industry": "Healthcare", "location": "Pune, India", "founded": 2010, "employees": 300, "email": "info@medicorepharma.com", "website": "https://www.medicorepharma.com" },
  { "id": 7, "name": "HealthBridge Hospitals", "industry": "Healthcare", "location": "Hyderabad, India", "founded": 2015, "employees": 220, "email": "contact@healthbridge.com", "website": "https://www.healthbridge.com" },
  { "id": 8, "name": "Wellness360 Clinics", "industry": "Healthcare", "location": "Bangalore, India", "founded": 2018, "employees": 150, "email": "hello@wellness360.com", "website": "https://www.wellness360.com" },
  { "id": 9, "name": "MedAssist Healthcare", "industry": "Healthcare", "location": "Chennai, India", "founded": 2014, "employees": 270, "email": "team@medassist.com", "website": "https://www.medassist.com" },
  { "id": 10, "name": "LifeCure Diagnostics", "industry": "Healthcare", "location": "Delhi, India", "founded": 2016, "employees": 190, "email": "info@lifecure.com", "website": "https://www.lifecure.com" },

  { "id": 11, "name": "Finverse Capital", "industry": "Finance", "location": "Delhi, India", "founded": 2016, "employees": 150, "email": "team@finversecapital.com", "website": "https://www.finversecapital.com" },
  { "id": 12, "name": "SwiftPay Fintech", "industry": "Finance", "location": "Pune, India", "founded": 2018, "employees": 180, "email": "hello@swiftpay.com", "website": "https://www.swiftpay.com" },
  { "id": 13, "name": "InvestNest Advisors", "industry": "Finance", "location": "Mumbai, India", "founded": 2015, "employees": 100, "email": "info@investnest.com", "website": "https://www.investnest.com" },
  { "id": 14, "name": "MoneyBridge Finance", "industry": "Finance", "location": "Hyderabad, India", "founded": 2012, "employees": 220, "email": "contact@moneybridge.com", "website": "https://www.moneybridge.com" },
  { "id": 15, "name": "GrowNest Ventures", "industry": "Finance", "location": "Bangalore, India", "founded": 2019, "employees": 75, "email": "support@grownest.com", "website": "https://www.grownest.com" },

  { "id": 16, "name": "EduSpark Learning", "industry": "Education", "location": "Kolkata, India", "founded": 2014, "employees": 80, "email": "support@eduspark.com", "website": "https://www.eduspark.com" },
  { "id": 17, "name": "BrightPath Academy", "industry": "Education", "location": "Hyderabad, India", "founded": 2018, "employees": 120, "email": "info@brightpath.com", "website": "https://www.brightpath.com" },
  { "id": 18, "name": "LearnHub Online", "industry": "Education", "location": "Delhi, India", "founded": 2016, "employees": 95, "email": "hello@learnhub.com", "website": "https://www.learnhub.com" },
  { "id": 19, "name": "SkillEra Institute", "industry": "Education", "location": "Pune, India", "founded": 2019, "employees": 60, "email": "contact@skillera.com", "website": "https://www.skillera.com" },
  { "id": 20, "name": "SmartEdu Labs", "industry": "Education", "location": "Bangalore, India", "founded": 2017, "employees": 110, "email": "team@smartedu.com", "website": "https://www.smartedu.com" },

  { "id": 21, "name": "BlueWave Electronics", "industry": "Manufacturing", "location": "Noida, India", "founded": 2005, "employees": 400, "email": "sales@bluewaveelectronics.com", "website": "https://www.bluewaveelectronics.com" },
  { "id": 22, "name": "ProtonEdge Systems", "industry": "Manufacturing", "location": "Bangalore, India", "founded": 2015, "employees": 150, "email": "info@protonedge.com", "website": "https://www.protonedge.com" },
  { "id": 23, "name": "Zenith Textiles", "industry": "Manufacturing", "location": "Coimbatore, India", "founded": 2006, "employees": 380, "email": "sales@zenithtextiles.com", "website": "https://www.zenithtextiles.com" },
  { "id": 24, "name": "OptiTech Instruments", "industry": "Manufacturing", "location": "Hyderabad, India", "founded": 2014, "employees": 130, "email": "contact@optitech.com", "website": "https://www.optitech.com" },
  { "id": 25, "name": "MetalCore Industries", "industry": "Manufacturing", "location": "Pune, India", "founded": 2009, "employees": 260, "email": "info@metalcore.com", "website": "https://www.metalcore.com" },

  { "id": 26, "name": "UrbanBuild Constructions", "industry": "Real Estate", "location": "Mumbai, India", "founded": 2008, "employees": 500, "email": "support@urbanbuild.com", "website": "https://www.urbanbuild.com" },
  { "id": 27, "name": "SilverLine Constructions", "industry": "Real Estate", "location": "Delhi, India", "founded": 2011, "employees": 350, "email": "contact@silverline.com", "website": "https://www.silverline.com" },
  { "id": 28, "name": "BuildNest Developers", "industry": "Real Estate", "location": "Hyderabad, India", "founded": 2015, "employees": 200, "email": "info@buildnest.com", "website": "https://www.buildnest.com" },
  { "id": 29, "name": "Skyline Projects", "industry": "Real Estate", "location": "Bangalore, India", "founded": 2013, "employees": 240, "email": "hello@skyline.com", "website": "https://www.skyline.com" },
  { "id": 30, "name": "NovaInfra Builders", "industry": "Real Estate", "location": "Chennai, India", "founded": 2017, "employees": 180, "email": "team@novainfra.com", "website": "https://www.novainfra.com" },

  { "id": 31, "name": "Zenith Motors", "industry": "Automotive", "location": "Pune, India", "founded": 2015, "employees": 240, "email": "info@zenithmotors.com", "website": "https://www.zenithmotors.com" },
  { "id": 32, "name": "RideON Mobility", "industry": "Automotive", "location": "Ahmedabad, India", "founded": 2020, "employees": 60, "email": "info@rideonmobility.com", "website": "https://www.rideonmobility.com" },
  { "id": 33, "name": "AutoCraft Industries", "industry": "Automotive", "location": "Chennai, India", "founded": 2014, "employees": 300, "email": "support@autocraft.com", "website": "https://www.autocraft.com" },
  { "id": 34, "name": "MotorEdge Dynamics", "industry": "Automotive", "location": "Delhi, India", "founded": 2018, "employees": 120, "email": "contact@motoredge.com", "website": "https://www.motoredge.com" },
  { "id": 35, "name": "SpeedLine Motors", "industry": "Automotive", "location": "Bangalore, India", "founded": 2017, "employees": 180, "email": "info@speedline.com", "website": "https://www.speedline.com" },

  { "id": 36, "name": "FarmRise AgroTech", "industry": "Agriculture", "location": "Nagpur, India", "founded": 2016, "employees": 130, "email": "team@farmrise.com", "website": "https://www.farmrise.com" },
  { "id": 37, "name": "GreenLeaf Organics", "industry": "Agriculture", "location": "Bangalore, India", "founded": 2012, "employees": 120, "email": "info@greenleaforganic.com", "website": "https://www.greenleaforganic.com" },
  { "id": 38, "name": "FarmRoot Organics", "industry": "Agriculture", "location": "Coimbatore, India", "founded": 2018, "employees": 110, "email": "info@farmroot.com", "website": "https://www.farmroot.com" },
  { "id": 39, "name": "AgroPure Farms", "industry": "Agriculture", "location": "Hyderabad, India", "founded": 2014, "employees": 95, "email": "contact@agropure.com", "website": "https://www.agropure.com" },
  { "id": 40, "name": "HarvestHub Foods", "industry": "Agriculture", "location": "Pune, India", "founded": 2015, "employees": 140, "email": "hello@harvesthub.com", "website": "https://www.harvesthub.com" },

  { "id": 41, "name": "EcoFuel Energy", "industry": "Energy", "location": "Jaipur, India", "founded": 2014, "employees": 150, "email": "support@ecofuel.com", "website": "https://www.ecofuel.com" },
  { "id": 42, "name": "SolarEdge Renewables", "industry": "Energy", "location": "Ahmedabad, India", "founded": 2013, "employees": 90, "email": "contact@solaredge.com", "website": "https://www.solaredge.com" },
  { "id": 43, "name": "GreenVolt Power", "industry": "Energy", "location": "Hyderabad, India", "founded": 2018, "employees": 110, "email": "info@greenvolt.com", "website": "https://www.greenvolt.com" },
  { "id": 44, "name": "Energenix Systems", "industry": "Energy", "location": "Bangalore, India", "founded": 2015, "employees": 130, "email": "hello@energenix.com", "website": "https://www.energenix.com" },
  { "id": 45, "name": "BrightPower India", "industry": "Energy", "location": "Delhi, India", "founded": 2017, "employees": 100, "email": "team@brightpower.com", "website": "https://www.brightpower.com" },

  { "id": 46, "name": "Vibe Media House", "industry": "Media", "location": "Delhi, India", "founded": 2017, "employees": 50, "email": "info@vibemedia.com", "website": "https://www.vibemedia.com" },
  { "id": 47, "name": "Visionary Media", "industry": "Media", "location": "Mumbai, India", "founded": 2012, "employees": 230, "email": "team@visionarymedia.com", "website": "https://www.visionarymedia.com" },
  { "id": 48, "name": "AdSphere Communications", "industry": "Media", "location": "Hyderabad, India", "founded": 2019, "employees": 90, "email": "contact@adsphere.com", "website": "https://www.adsphere.com" },
  { "id": 49, "name": "NextWave Studios", "industry": "Media", "location": "Bangalore, India", "founded": 2015, "employees": 110, "email": "hello@nextwave.com", "website": "https://www.nextwave.com" },
  { "id": 50, "name": "StarVision Productions", "industry": "Media", "location": "Chennai, India", "founded": 2016, "employees": 160, "email": "info@starvision.com", "website": "https://www.starvision.com" }
]

export default companiesData;