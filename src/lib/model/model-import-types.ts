export type agtAgentTypesImport = {
	agentTypeID: string;
	agentType: string | null;
};

export type agtAgentsImport = {
	agentID: string;
	divisionID: string | null;
	corporationID: string | null;
	locationID: string | null;
	level: string | null;
	quality: string | null;
	agentTypeID: string | null;
	isLocator: string | null;
};

export type agtAgentsInSpaceImport = {
	agentID: string;
	dungeonID: string | null;
	solarSystemID: string | null;
	spawnPointID: string | null;
	typeID: string | null;
};

export type agtResearchAgentsImport = {
	agentID: string;
	typeID: string;
};

export type certCertsImport = {
	certID: string;
	description: string | null;
	groupID: string | null;
	name: string | null;
};

export type certMasteriesImport = {
	typeID: string | null;
	masteryLevel: string | null;
	certID: string | null;
	id: string;
};

export type certSkillsImport = {
	certID: string | null;
	skillID: string | null;
	certLevelInt: string | null;
	skillLevel: string | null;
	certLevelText: string | null;
	id: string;
};

export type charFactionsImport = {
	factionID: string;
	factionName: string | null;
	description: string | null;
	raceIDs: string | null;
	solarSystemID: string | null;
	corporationID: string | null;
	sizeFactor: string | null;
	stationCount: string | null;
	stationSystemCount: string | null;
	militiaCorporationID: string | null;
	iconID: string | null;
	id: string;
};

export type chrAncestriesImport = {
	ancestryID: string;
	ancestryName: string | null;
	bloodlineID: string | null;
	description: string | null;
	perception: string | null;
	willpower: string | null;
	charisma: string | null;
	memory: string | null;
	intelligence: string | null;
	iconID: string | null;
	shortDescription: string | null;
};

export type chrAttributesImport = {
	attributeID: string;
	attributeName: string | null;
	description: string | null;
	iconID: string | null;
	shortDescription: string | null;
	notes: string | null;
};

export type chrBloodlinesImport = {
	bloodlineID: string;
	bloodlineName: string | null;
	raceID: string | null;
	description: string | null;
	maleDescription: string | null;
	femaleDescription: string | null;
	shipTypeID: string | null;
	corporationID: string | null;
	perception: string | null;
	willpower: string | null;
	charisma: string | null;
	memory: string | null;
	intelligence: string | null;
	iconID: string | null;
	shortDescription: string | null;
	shortMaleDescription: string | null;
	shortFemaleDescription: string | null;
};

export type chrFactionsImport = {
	factionID: string;
	factionName: string | null;
	description: string | null;
	raceIDs: string | null;
	solarSystemID: string | null;
	corporationID: string | null;
	sizeFactor: string | null;
	stationCount: string | null;
	stationSystemCount: string | null;
	militiaCorporationID: string | null;
	iconID: string | null;
};

export type chrRacesImport = {
	raceID: string;
	raceName: string | null;
	description: string | null;
	iconID: string | null;
	shortDescription: string | null;
};

export type crpActivitiesImport = {
	activityID: string;
	activityName: string | null;
	description: string | null;
};

export type crpNPCCorporationDivisionsImport = {
	corporationID: string;
	divisionID: string;
	size: string | null;
};

export type crpNPCCorporationResearchFieldsImport = {
	skillID: string;
	corporationID: string;
};

export type crpNPCCorporationTradesImport = {
	corporationID: string;
	typeID: string;
};

export type crpNPCCorporationsImport = {
	corporationID: string;
	size: string | null;
	extent: string | null;
	solarSystemID: string | null;
	investorID1: string | null;
	investorShares1: string | null;
	investorID2: string | null;
	investorShares2: string | null;
	investorID3: string | null;
	investorShares3: string | null;
	investorID4: string | null;
	investorShares4: string | null;
	friendID: string | null;
	enemyID: string | null;
	publicShares: string | null;
	initialPrice: string | null;
	minSecurity: string | null;
	scattered: string | null;
	fringe: string | null;
	corridor: string | null;
	hub: string | null;
	border: string | null;
	factionID: string | null;
	sizeFactor: string | null;
	stationCount: string | null;
	stationSystemCount: string | null;
	description: string | null;
	iconID: string | null;
};

export type crpNPCDivisionsImport = {
	divisionID: string;
	divisionName: string | null;
	description: string | null;
	leaderType: string | null;
};

export type dgmAttributeCategoriesImport = {
	categoryID: string;
	categoryName: string | null;
	categoryDescription: string | null;
};

export type dgmAttributeTypesImport = {
	attributeID: string;
	attributeName: string | null;
	description: string | null;
	iconID: string | null;
	defaultValue: string | null;
	published: string | null;
	displayName: string | null;
	unitID: string | null;
	stackable: string | null;
	highIsGood: string | null;
	categoryID: string | null;
};

export type dgmEffectsImport = {
	effectID: string;
	effectName: string | null;
	effectCategory: string | null;
	preExpression: string | null;
	postExpression: string | null;
	description: string | null;
	guid: string | null;
	iconID: string | null;
	isOffensive: string | null;
	isAssistance: string | null;
	durationAttributeID: string | null;
	trackingSpeedAttributeID: string | null;
	dischargeAttributeID: string | null;
	rangeAttributeID: string | null;
	falloffAttributeID: string | null;
	disallowAutoRepeat: string | null;
	published: string | null;
	displayName: string | null;
	isWarpSafe: string | null;
	rangeChance: string | null;
	electronicChance: string | null;
	propulsionChance: string | null;
	distribution: string | null;
	sfxName: string | null;
	npcUsageChanceAttributeID: string | null;
	npcActivationChanceAttributeID: string | null;
	fittingUsageChanceAttributeID: string | null;
	modifierInfo: string | null;
};

export type dgmExpressionsImport = {
	expressionID: string;
	operandID: string | null;
	arg1: string | null;
	arg2: string | null;
	expressionValue: string | null;
	description: string | null;
	expressionName: string | null;
	expressionTypeID: string | null;
	expressionGroupID: string | null;
	expressionAttributeID: string | null;
};

export type dgmTypeAttributesImport = {
	typeID: string;
	attributeID: string;
	valueInt: string | null;
	valueFloat: string | null;
};

export type dgmTypeEffectsImport = {
	typeID: string;
	effectID: string;
	isDefault: string | null;
};

export type eveGraphicsImport = {
	graphicID: string;
	sofFactionName: string | null;
	graphicFile: string | null;
	sofHullName: string | null;
	sofRaceName: string | null;
	description: string | null;
};

export type eveIconsImport = {
	iconID: string;
	iconFile: string | null;
	description: string | null;
};

export type eveUnitsImport = {
	unitID: string;
	unitName: string | null;
	displayName: string | null;
	description: string | null;
};

export type industryActivityImport = {
	typeID: string;
	activityID: string;
	time: string | null;
};

export type industryActivityMaterialsImport = {
	typeID: string | null;
	activityID: string | null;
	materialTypeID: string | null;
	quantity: string | null;
	id: string;
};

export type industryActivityProbabilitiesImport = {
	typeID: string | null;
	activityID: string | null;
	productTypeID: string | null;
	probability: string | null;
	id: string;
};

export type industryActivityProductsImport = {
	typeID: string | null;
	activityID: string | null;
	productTypeID: string | null;
	quantity: string | null;
	id: string;
};

export type industryActivityRacesImport = {
	typeID: string | null;
	activityID: string | null;
	productTypeID: string | null;
	raceID: string | null;
	id: string;
};

export type industryActivitySkillsImport = {
	typeID: string | null;
	activityID: string | null;
	skillID: string | null;
	level: string | null;
	id: string;
};

export type industryBlueprintsImport = {
	typeID: string;
	maxProductionLimit: string | null;
};

export type invCategoriesImport = {
	categoryID: string;
	categoryName: string | null;
	iconID: string | null;
	published: string | null;
};

export type invContrabandTypesImport = {
	factionID: string;
	typeID: string;
	standingLoss: string | null;
	confiscateMinSec: string | null;
	fineByValue: string | null;
	attackMinSec: string | null;
};

export type invControlTowerResourcePurposesImport = {
	purpose: string;
	purposeText: string | null;
};

export type invControlTowerResourcesImport = {
	controlTowerTypeID: string;
	resourceTypeID: string;
	purpose: string | null;
	quantity: string | null;
	minSecurityLevel: string | null;
	factionID: string | null;
};

export type invFlagsImport = {
	flagID: string;
	flagName: string | null;
	flagText: string | null;
	orderID: string | null;
};

export type invGroupsImport = {
	groupID: string;
	categoryID: string | null;
	groupName: string | null;
	iconID: string | null;
	useBasePrice: string | null;
	anchored: string | null;
	anchorable: string | null;
	fittableNonSingleton: string | null;
	published: string | null;
};

export type invItemsImport = {
	itemID: string;
	typeID: string;
	ownerID: string;
	locationID: string;
	flagID: string;
	quantity: string;
};

export type invMarketGroupsImport = {
	marketGroupID: string;
	parentGroupID: string | null;
	marketGroupName: string | null;
	description: string | null;
	iconID: string | null;
	hasTypes: string | null;
};

export type invMetaGroupsImport = {
	metaGroupID: string;
	metaGroupName: string | null;
	description: string | null;
	iconID: string | null;
};

export type invMetaTypesImport = {
	typeID: string;
	parentTypeID: string | null;
	metaGroupID: string | null;
};

export type invNamesImport = {
	itemID: string;
	itemName: string;
};

export type invPositionsImport = {
	itemID: string;
	x: string;
	y: string;
	z: string;
	yaw: string | null;
	pitch: string | null;
	roll: string | null;
};

export type invTraitsImport = {
	traitID: string;
	typeID: string | null;
	skillID: string | null;
	bonus: string | null;
	bonusText: string | null;
	unitID: string | null;
};

export type invTypeMaterialsImport = {
	typeID: string;
	materialTypeID: string;
	quantity: string;
};

export type invTypeReactionsImport = {
	reactionTypeID: string;
	input: string;
	typeID: string;
	quantity: string | null;
};

export type invTypesImport = {
	typeID: string;
	groupID: string | null;
	typeName: string | null;
	description: string | null;
	mass: string | null;
	volume: string | null;
	capacity: string | null;
	portionSize: string | null;
	raceID: string | null;
	basePrice: string | null;
	published: string | null;
	marketGroupID: string | null;
	iconID: string | null;
	soundID: string | null;
	graphicID: string | null;
};

export type invUniqueNamesImport = {
	itemID: string;
	itemName: string;
	groupID: string | null;
};

export type invVolumesImport = {
	typeID: string;
	volume: string | null;
};

export type mapCelestialGraphicsImport = {
	celestialID: string;
	heightMap1: string | null;
	heightMap2: string | null;
	shaderPreset: string | null;
	population: string | null;
};

export type mapCelestialStatisticsImport = {
	celestialID: string;
	temperature: string | null;
	spectralClass: string | null;
	luminosity: string | null;
	age: string | null;
	life: string | null;
	orbitRadius: string | null;
	eccentricity: string | null;
	massDust: string | null;
	massGas: string | null;
	fragmented: string | null;
	density: string | null;
	surfaceGravity: string | null;
	escapeVelocity: string | null;
	orbitPeriod: string | null;
	rotationRate: string | null;
	locked: string | null;
	pressure: string | null;
	radius: string | null;
	mass: string | null;
};

export type mapConstellationJumpsImport = {
	fromRegionID: string | null;
	fromConstellationID: string;
	toConstellationID: string;
	toRegionID: string | null;
};

export type mapConstellationsImport = {
	regionID: string | null;
	constellationID: string;
	constellationName: string | null;
	x: string | null;
	y: string | null;
	z: string | null;
	xMin: string | null;
	xMax: string | null;
	yMin: string | null;
	yMax: string | null;
	zMin: string | null;
	zMax: string | null;
	factionID: string | null;
	radius: string | null;
};

export type mapDenormalizeImport = {
	itemID: string;
	typeID: string | null;
	groupID: string | null;
	solarSystemID: string | null;
	constellationID: string | null;
	regionID: string | null;
	orbitID: string | null;
	x: string | null;
	y: string | null;
	z: string | null;
	radius: string | null;
	itemName: string | null;
	security: string | null;
	celestialIndex: string | null;
	orbitIndex: string | null;
};

export type mapJumpsImport = {
	stargateID: string;
	destinationID: string | null;
};

export type mapLandmarksImport = {
	landmarkID: string;
	landmarkName: string | null;
	description: string | null;
	locationID: string | null;
	x: string | null;
	y: string | null;
	z: string | null;
	iconID: string | null;
};

export type mapLocationScenesImport = {
	locationID: string;
	graphicID: string | null;
};

export type mapLocationWormholeClassesImport = {
	locationID: string;
	wormholeClassID: string | null;
};

export type mapRegionJumpsImport = {
	fromRegionID: string;
	toRegionID: string;
};

export type mapRegionsImport = {
	regionID: string;
	regionName: string | null;
	x: string | null;
	y: string | null;
	z: string | null;
	xMin: string | null;
	xMax: string | null;
	yMin: string | null;
	yMax: string | null;
	zMin: string | null;
	zMax: string | null;
	factionID: string | null;
	nebula: string | null;
	radius: string | null;
};

export type mapSolarSystemJumpsImport = {
	fromRegionID: string | null;
	fromConstellationID: string | null;
	fromSolarSystemID: string;
	toSolarSystemID: string;
	toConstellationID: string | null;
	toRegionID: string | null;
};

export type mapSolarSystemsImport = {
	regionID: string | null;
	constellationID: string | null;
	solarSystemID: string;
	solarSystemName: string | null;
	x: string | null;
	y: string | null;
	z: string | null;
	xMin: string | null;
	xMax: string | null;
	yMin: string | null;
	yMax: string | null;
	zMin: string | null;
	zMax: string | null;
	luminosity: string | null;
	border: string | null;
	fringe: string | null;
	corridor: string | null;
	hub: string | null;
	international: string | null;
	regional: string | null;
	constellation: string | null;
	security: string | null;
	factionID: string | null;
	radius: string | null;
	sunTypeID: string | null;
	securityClass: string | null;
};

export type mapUniverseImport = {
	universeID: string;
	universeName: string | null;
	x: string | null;
	y: string | null;
	z: string | null;
	xMin: string | null;
	xMax: string | null;
	yMin: string | null;
	yMax: string | null;
	zMin: string | null;
	zMax: string | null;
	radius: string | null;
};

export type planetSchematicsImport = {
	schematicID: string;
	schematicName: string | null;
	cycleTime: string | null;
};

export type planetSchematicsPinMapImport = {
	schematicID: string;
	pinTypeID: string;
};

export type planetSchematicsTypeMapImport = {
	schematicID: string;
	typeID: string;
	quantity: string | null;
	isInput: string | null;
};

export type ramActivitiesImport = {
	activityID: string;
	activityName: string | null;
	iconNo: string | null;
	description: string | null;
	published: string | null;
};

export type ramAssemblyLineStationsImport = {
	stationID: string;
	assemblyLineTypeID: string;
	quantity: string | null;
	stationTypeID: string | null;
	ownerID: string | null;
	solarSystemID: string | null;
	regionID: string | null;
};

export type ramAssemblyLineTypeDetailPerCategoryImport = {
	assemblyLineTypeID: string;
	categoryID: string;
	timeMultiplier: string | null;
	materialMultiplier: string | null;
	costMultiplier: string | null;
};

export type ramAssemblyLineTypeDetailPerGroupImport = {
	assemblyLineTypeID: string;
	groupID: string;
	timeMultiplier: string | null;
	materialMultiplier: string | null;
	costMultiplier: string | null;
};

export type ramAssemblyLineTypesImport = {
	assemblyLineTypeID: string;
	assemblyLineTypeName: string | null;
	description: string | null;
	baseTimeMultiplier: string | null;
	baseMaterialMultiplier: string | null;
	baseCostMultiplier: string | null;
	volume: string | null;
	activityID: string | null;
	minCostPerHour: string | null;
};

export type ramInstallationTypeContentsImport = {
	installationTypeID: string;
	assemblyLineTypeID: string;
	quantity: string | null;
};

export type skinLicenseImport = {
	licenseTypeID: string;
	duration: string | null;
	skinID: string | null;
};

export type skinMaterialsImport = {
	skinMaterialID: string;
	displayNameID: string | null;
	materialSetID: string | null;
};

export type skinShipImport = {
	skinID: string | null;
	typeID: string | null;
	id: string;
};

export type skinsImport = {
	skinID: string;
	internalName: string | null;
	skinMaterialID: string | null;
};

export type staOperationServicesImport = {
	operationID: string;
	serviceID: string;
};

export type staOperationsImport = {
	activityID: string | null;
	operationID: string;
	operationName: string | null;
	description: string | null;
	fringe: string | null;
	corridor: string | null;
	hub: string | null;
	border: string | null;
	ratio: string | null;
	caldariStationTypeID: string | null;
	minmatarStationTypeID: string | null;
	amarrStationTypeID: string | null;
	gallenteStationTypeID: string | null;
	joveStationTypeID: string | null;
};

export type staServicesImport = {
	serviceID: string;
	serviceName: string | null;
	description: string | null;
};

export type staStationTypesImport = {
	stationTypeID: string;
	dockEntryX: string | null;
	dockEntryY: string | null;
	dockEntryZ: string | null;
	dockOrientationX: string | null;
	dockOrientationY: string | null;
	dockOrientationZ: string | null;
	operationID: string | null;
	officeSlots: string | null;
	reprocessingEfficiency: string | null;
	conquerable: string | null;
};

export type staStationsImport = {
	stationID: bigint;
	security: string | null;
	dockingCostPerVolume: string | null;
	maxShipVolumeDockable: string | null;
	officeRentalCost: string | null;
	operationID: string | null;
	stationTypeID: string | null;
	corporationID: string | null;
	solarSystemID: string | null;
	constellationID: string | null;
	regionID: string | null;
	stationName: string | null;
	x: string | null;
	y: string | null;
	z: string | null;
	reprocessingEfficiency: string | null;
	reprocessingStationsTake: string | null;
	reprocessingHangarFlag: string | null;
};

export type translationTablesImport = {
	sourceTable: string;
	destinationTable: string | null;
	translatedKey: string;
	tcGroupID: string | null;
	tcID: string | null;
};

export type trnTranslationColumnsImport = {
	tcGroupID: string | null;
	tcID: string;
	tableName: string;
	columnName: string;
	masterID: string | null;
};

export type trnTranslationLanguagesImport = {
	numericLanguageID: string;
	languageID: string | null;
	languageName: string | null;
};

export type trnTranslationsImport = {
	tcID: string;
	keyID: string;
	languageID: string;
	text: string;
};

export type warCombatZoneSystemsImport = {
	solarSystemID: string;
	combatZoneID: string | null;
};

export type warCombatZonesImport = {
	combatZoneID: string;
	combatZoneName: string | null;
	factionID: string | null;
	centerSystemID: string | null;
	description: string | null;
};
