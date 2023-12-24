export type agtAgentTypes = {
	agentTypeID: string;
	agentType: string | null;
};

export type agtAgents = {
	agentID: string;
	divisionID: string | null;
	corporationID: string | null;
	locationID: string | null;
	level: string | null;
	quality: string | null;
	agentTypeID: string | null;
	isLocator: string | null;
};

export type agtAgentsInSpace = {
	agentID: string;
	dungeonID: string | null;
	solarSystemID: string | null;
	spawnPointID: string | null;
	typeID: string | null;
};

export type agtResearchAgents = {
	agentID: string;
	typeID: string;
};

export type certCerts = {
	certID: string;
	description: string | null;
	groupID: string | null;
	name: string | null;
};

export type certMasteries = {
	typeID: string | null;
	masteryLevel: string | null;
	certID: string | null;
	id: string;
};

export type certSkills = {
	certID: string | null;
	skillID: string | null;
	certLevelInt: string | null;
	skillLevel: string | null;
	certLevelText: string | null;
	id: string;
};

export type charFactions = {
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

export type chrAncestries = {
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

export type chrAttributes = {
	attributeID: string;
	attributeName: string | null;
	description: string | null;
	iconID: string | null;
	shortDescription: string | null;
	notes: string | null;
};

export type chrBloodlines = {
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

export type chrFactions = {
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

export type chrRaces = {
	raceID: string;
	raceName: string | null;
	description: string | null;
	iconID: string | null;
	shortDescription: string | null;
};

export type crpActivities = {
	activityID: string;
	activityName: string | null;
	description: string | null;
};

export type crpNPCCorporationDivisions = {
	corporationID: string;
	divisionID: string;
	size: string | null;
};

export type crpNPCCorporationResearchFields = {
	skillID: string;
	corporationID: string;
};

export type crpNPCCorporationTrades = {
	corporationID: string;
	typeID: string;
};

export type crpNPCCorporations = {
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

export type crpNPCDivisions = {
	divisionID: string;
	divisionName: string | null;
	description: string | null;
	leaderType: string | null;
};

export type dgmAttributeCategories = {
	categoryID: string;
	categoryName: string | null;
	categoryDescription: string | null;
};

export type dgmAttributeTypes = {
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

export type dgmEffects = {
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

export type dgmExpressions = {
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

export type dgmTypeAttributes = {
	typeID: string;
	attributeID: string;
	valueInt: string | null;
	valueFloat: string | null;
};

export type dgmTypeEffects = {
	typeID: string;
	effectID: string;
	isDefault: string | null;
};

export type eveGraphics = {
	graphicID: string;
	sofFactionName: string | null;
	graphicFile: string | null;
	sofHullName: string | null;
	sofRaceName: string | null;
	description: string | null;
};

export type eveIcons = {
	iconID: string;
	iconFile: string | null;
	description: string | null;
};

export type eveUnits = {
	unitID: string;
	unitName: string | null;
	displayName: string | null;
	description: string | null;
};

export type industryActivity = {
	typeID: string;
	activityID: string;
	time: string | null;
};

export type industryActivityMaterials = {
	typeID: string | null;
	activityID: string | null;
	materialTypeID: string | null;
	quantity: string | null;
	id: string;
};

export type industryActivityProbabilities = {
	typeID: string | null;
	activityID: string | null;
	productTypeID: string | null;
	probability: string | null;
	id: string;
};

export type industryActivityProducts = {
	typeID: string | null;
	activityID: string | null;
	productTypeID: string | null;
	quantity: string | null;
	id: string;
};

export type industryActivityRaces = {
	typeID: string | null;
	activityID: string | null;
	productTypeID: string | null;
	raceID: string | null;
	id: string;
};

export type industryActivitySkills = {
	typeID: string | null;
	activityID: string | null;
	skillID: string | null;
	level: string | null;
	id: string;
};

export type industryBlueprints = {
	typeID: string;
	maxProductionLimit: string | null;
};

export type invCategories = {
	categoryID: string;
	categoryName: string | null;
	iconID: string | null;
	published: string | null;
};

export type invContrabandTypes = {
	factionID: string;
	typeID: string;
	standingLoss: string | null;
	confiscateMinSec: string | null;
	fineByValue: string | null;
	attackMinSec: string | null;
};

export type invControlTowerResourcePurposes = {
	purpose: string;
	purposeText: string | null;
};

export type invControlTowerResources = {
	controlTowerTypeID: string;
	resourceTypeID: string;
	purpose: string | null;
	quantity: string | null;
	minSecurityLevel: string | null;
	factionID: string | null;
};

export type invFlags = {
	flagID: string;
	flagName: string | null;
	flagText: string | null;
	orderID: string | null;
};

export type invGroups = {
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

export type invItems = {
	itemID: string;
	typeID: string;
	ownerID: string;
	locationID: string;
	flagID: string;
	quantity: string;
};

export type invMarketGroups = {
	marketGroupID: string;
	parentGroupID: string | null;
	marketGroupName: string | null;
	description: string | null;
	iconID: string | null;
	hasTypes: string | null;
};

export type invMetaGroups = {
	metaGroupID: string;
	metaGroupName: string | null;
	description: string | null;
	iconID: string | null;
};

export type invMetaTypes = {
	typeID: string;
	parentTypeID: string | null;
	metaGroupID: string | null;
};

export type invNames = {
	itemID: string;
	itemName: string;
};

export type invPositions = {
	itemID: string;
	x: string;
	y: string;
	z: string;
	yaw: string | null;
	pitch: string | null;
	roll: string | null;
};

export type invTraits = {
	traitID: string;
	typeID: string | null;
	skillID: string | null;
	bonus: string | null;
	bonusText: string | null;
	unitID: string | null;
};

export type invTypeMaterials = {
	typeID: string;
	materialTypeID: string;
	quantity: string;
};

export type invTypeReactions = {
	reactionTypeID: string;
	input: string;
	typeID: string;
	quantity: string | null;
};

export type invTypes = {
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

export type invUniqueNames = {
	itemID: string;
	itemName: string;
	groupID: string | null;
};

export type invVolumes = {
	typeID: string;
	volume: string | null;
};

export type mapCelestialGraphics = {
	celestialID: string;
	heightMap1: string | null;
	heightMap2: string | null;
	shaderPreset: string | null;
	population: string | null;
};

export type mapCelestialStatistics = {
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

export type mapConstellationJumps = {
	fromRegionID: string | null;
	fromConstellationID: string;
	toConstellationID: string;
	toRegionID: string | null;
};

export type mapConstellations = {
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

export type mapDenormalize = {
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

export type mapJumps = {
	stargateID: string;
	destinationID: string | null;
};

export type mapLandmarks = {
	landmarkID: string;
	landmarkName: string | null;
	description: string | null;
	locationID: string | null;
	x: string | null;
	y: string | null;
	z: string | null;
	iconID: string | null;
};

export type mapLocationScenes = {
	locationID: string;
	graphicID: string | null;
};

export type mapLocationWormholeClasses = {
	locationID: string;
	wormholeClassID: string | null;
};

export type mapRegionJumps = {
	fromRegionID: string;
	toRegionID: string;
};

export type mapRegions = {
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

export type mapSolarSystemJumps = {
	fromRegionID: string | null;
	fromConstellationID: string | null;
	fromSolarSystemID: string;
	toSolarSystemID: string;
	toConstellationID: string | null;
	toRegionID: string | null;
};

export type mapSolarSystems = {
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

export type mapUniverse = {
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

export type planetSchematics = {
	schematicID: string;
	schematicName: string | null;
	cycleTime: string | null;
};

export type planetSchematicsPinMap = {
	schematicID: string;
	pinTypeID: string;
};

export type planetSchematicsTypeMap = {
	schematicID: string;
	typeID: string;
	quantity: string | null;
	isInput: string | null;
};

export type ramActivities = {
	activityID: string;
	activityName: string | null;
	iconNo: string | null;
	description: string | null;
	published: string | null;
};

export type ramAssemblyLineStations = {
	stationID: string;
	assemblyLineTypeID: string;
	quantity: string | null;
	stationTypeID: string | null;
	ownerID: string | null;
	solarSystemID: string | null;
	regionID: string | null;
};

export type ramAssemblyLineTypeDetailPerCategory = {
	assemblyLineTypeID: string;
	categoryID: string;
	timeMultiplier: string | null;
	materialMultiplier: string | null;
	costMultiplier: string | null;
};

export type ramAssemblyLineTypeDetailPerGroup = {
	assemblyLineTypeID: string;
	groupID: string;
	timeMultiplier: string | null;
	materialMultiplier: string | null;
	costMultiplier: string | null;
};

export type ramAssemblyLineTypes = {
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

export type ramInstallationTypeContents = {
	installationTypeID: string;
	assemblyLineTypeID: string;
	quantity: string | null;
};

export type skinLicense = {
	licenseTypeID: string;
	duration: string | null;
	skinID: string | null;
};

export type skinMaterials = {
	skinMaterialID: string;
	displayNameID: string | null;
	materialSetID: string | null;
};

export type skinShip = {
	skinID: string | null;
	typeID: string | null;
	id: string;
};

export type skins = {
	skinID: string;
	internalName: string | null;
	skinMaterialID: string | null;
};

export type staOperationServices = {
	operationID: string;
	serviceID: string;
};

export type staOperations = {
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

export type staServices = {
	serviceID: string;
	serviceName: string | null;
	description: string | null;
};

export type staStationTypes = {
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

export type staStations = {
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

export type translationTables = {
	sourceTable: string;
	destinationTable: string | null;
	translatedKey: string;
	tcGroupID: string | null;
	tcID: string | null;
};

export type trnTranslationColumns = {
	tcGroupID: string | null;
	tcID: string;
	tableName: string;
	columnName: string;
	masterID: string | null;
};

export type trnTranslationLanguages = {
	numericLanguageID: string;
	languageID: string | null;
	languageName: string | null;
};

export type trnTranslations = {
	tcID: string;
	keyID: string;
	languageID: string;
	text: string;
};

export type warCombatZoneSystems = {
	solarSystemID: string;
	combatZoneID: string | null;
};

export type warCombatZones = {
	combatZoneID: string;
	combatZoneName: string | null;
	factionID: string | null;
	centerSystemID: string | null;
	description: string | null;
};
