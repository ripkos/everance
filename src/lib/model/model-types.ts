export type agtAgentTypes = {
	agentTypeID: number;
	agentType: string | null;
};

export type agtAgents = {
	agentID: number;
	divisionID: number | null;
	corporationID: number | null;
	locationID: number | null;
	level: number | null;
	quality: number | null;
	agentTypeID: number | null;
	isLocator: boolean | null;
};

export type agtAgentsInSpace = {
	agentID: number;
	dungeonID: number | null;
	solarSystemID: number | null;
	spawnPointID: number | null;
	typeID: number | null;
};

export type agtResearchAgents = {
	agentID: number;
	typeID: number;
};

export type certCerts = {
	certID: number;
	description: string | null;
	groupID: number | null;
	name: string | null;
};

export type certMasteries = {
	typeID: number | null;
	masteryLevel: number | null;
	certID: number | null;
	id: number;
};

export type certSkills = {
	certID: number | null;
	skillID: number | null;
	certLevelInt: number | null;
	skillLevel: number | null;
	certLevelText: string | null;
	id: number;
};

export type charFactions = {
	factionID: number;
	factionName: string | null;
	description: string | null;
	raceIDs: number | null;
	solarSystemID: number | null;
	corporationID: number | null;
	sizeFactor: number | null;
	stationCount: number | null;
	stationSystemCount: number | null;
	militiaCorporationID: number | null;
	iconID: number | null;
	id: number;
};

export type chrAncestries = {
	ancestryID: number;
	ancestryName: string | null;
	bloodlineID: number | null;
	description: string | null;
	perception: number | null;
	willpower: number | null;
	charisma: number | null;
	memory: number | null;
	intelligence: number | null;
	iconID: number | null;
	shortDescription: string | null;
};

export type chrAttributes = {
	attributeID: number;
	attributeName: string | null;
	description: string | null;
	iconID: number | null;
	shortDescription: string | null;
	notes: string | null;
};

export type chrBloodlines = {
	bloodlineID: number;
	bloodlineName: string | null;
	raceID: number | null;
	description: string | null;
	maleDescription: string | null;
	femaleDescription: string | null;
	shipTypeID: number | null;
	corporationID: number | null;
	perception: number | null;
	willpower: number | null;
	charisma: number | null;
	memory: number | null;
	intelligence: number | null;
	iconID: number | null;
	shortDescription: string | null;
	shortMaleDescription: string | null;
	shortFemaleDescription: string | null;
};

export type chrFactions = {
	factionID: number;
	factionName: string | null;
	description: string | null;
	raceIDs: number | null;
	solarSystemID: number | null;
	corporationID: number | null;
	sizeFactor: number | null;
	stationCount: number | null;
	stationSystemCount: number | null;
	militiaCorporationID: number | null;
	iconID: number | null;
};

export type chrRaces = {
	raceID: number;
	raceName: string | null;
	description: string | null;
	iconID: number | null;
	shortDescription: string | null;
};

export type crpActivities = {
	activityID: number;
	activityName: string | null;
	description: string | null;
};

export type crpNPCCorporationDivisions = {
	corporationID: number;
	divisionID: number;
	size: number | null;
};

export type crpNPCCorporationResearchFields = {
	skillID: number;
	corporationID: number;
};

export type crpNPCCorporationTrades = {
	corporationID: number;
	typeID: number;
};

export type crpNPCCorporations = {
	corporationID: number;
	size: string | null;
	extent: string | null;
	solarSystemID: number | null;
	investorID1: number | null;
	investorShares1: number | null;
	investorID2: number | null;
	investorShares2: number | null;
	investorID3: number | null;
	investorShares3: number | null;
	investorID4: number | null;
	investorShares4: number | null;
	friendID: number | null;
	enemyID: number | null;
	publicShares: number | null;
	initialPrice: number | null;
	minSecurity: number | null;
	scattered: boolean | null;
	fringe: number | null;
	corridor: number | null;
	hub: number | null;
	border: number | null;
	factionID: number | null;
	sizeFactor: number | null;
	stationCount: number | null;
	stationSystemCount: number | null;
	description: string | null;
	iconID: number | null;
};

export type crpNPCDivisions = {
	divisionID: number;
	divisionName: string | null;
	description: string | null;
	leaderType: string | null;
};

export type dgmAttributeCategories = {
	categoryID: number;
	categoryName: string | null;
	categoryDescription: string | null;
};

export type dgmAttributeTypes = {
	attributeID: number;
	attributeName: string | null;
	description: string | null;
	iconID: number | null;
	defaultValue: number | null;
	published: boolean | null;
	displayName: string | null;
	unitID: number | null;
	stackable: boolean | null;
	highIsGood: boolean | null;
	categoryID: number | null;
};

export type dgmEffects = {
	effectID: number;
	effectName: string | null;
	effectCategory: number | null;
	preExpression: number | null;
	postExpression: number | null;
	description: string | null;
	guid: string | null;
	iconID: number | null;
	isOffensive: boolean | null;
	isAssistance: boolean | null;
	durationAttributeID: number | null;
	trackingSpeedAttributeID: number | null;
	dischargeAttributeID: number | null;
	rangeAttributeID: number | null;
	falloffAttributeID: number | null;
	disallowAutoRepeat: boolean | null;
	published: boolean | null;
	displayName: string | null;
	isWarpSafe: boolean | null;
	rangeChance: boolean | null;
	electronicChance: boolean | null;
	propulsionChance: boolean | null;
	distribution: number | null;
	sfxName: string | null;
	npcUsageChanceAttributeID: number | null;
	npcActivationChanceAttributeID: number | null;
	fittingUsageChanceAttributeID: number | null;
	modifierInfo: string | null;
};

export type dgmExpressions = {
	expressionID: number;
	operandID: number | null;
	arg1: number | null;
	arg2: number | null;
	expressionValue: string | null;
	description: string | null;
	expressionName: string | null;
	expressionTypeID: number | null;
	expressionGroupID: number | null;
	expressionAttributeID: number | null;
};

export type dgmTypeAttributes = {
	typeID: number;
	attributeID: number;
	valueInt: number | null;
	valueFloat: number | null;
};

export type dgmTypeEffects = {
	typeID: number;
	effectID: number;
	isDefault: boolean | null;
};

export type eveGraphics = {
	graphicID: number;
	sofFactionName: string | null;
	graphicFile: string | null;
	sofHullName: string | null;
	sofRaceName: string | null;
	description: string | null;
};

export type eveIcons = {
	iconID: number;
	iconFile: string | null;
	description: string | null;
};

export type eveUnits = {
	unitID: number;
	unitName: string | null;
	displayName: string | null;
	description: string | null;
};

export type industryActivity = {
	typeID: number;
	activityID: number;
	time: number | null;
};

export type industryActivityMaterials = {
	typeID: number | null;
	activityID: number | null;
	materialTypeID: number | null;
	quantity: number | null;
	id: number;
};

export type industryActivityProbabilities = {
	typeID: number | null;
	activityID: number | null;
	productTypeID: number | null;
	probability: number | null;
	id: number;
};

export type industryActivityProducts = {
	typeID: number | null;
	activityID: number | null;
	productTypeID: number | null;
	quantity: number | null;
	id: number;
};

export type industryActivityRaces = {
	typeID: number | null;
	activityID: number | null;
	productTypeID: number | null;
	raceID: number | null;
	id: number;
};

export type industryActivitySkills = {
	typeID: number | null;
	activityID: number | null;
	skillID: number | null;
	level: number | null;
	id: number;
};

export type industryBlueprints = {
	typeID: number;
	maxProductionLimit: number | null;
};

export type invCategories = {
	categoryID: number;
	categoryName: string | null;
	iconID: number | null;
	published: boolean | null;
};

export type invContrabandTypes = {
	factionID: number;
	typeID: number;
	standingLoss: number | null;
	confiscateMinSec: number | null;
	fineByValue: number | null;
	attackMinSec: number | null;
};

export type invControlTowerResourcePurposes = {
	purpose: number;
	purposeText: string | null;
};

export type invControlTowerResources = {
	controlTowerTypeID: number;
	resourceTypeID: number;
	purpose: number | null;
	quantity: number | null;
	minSecurityLevel: number | null;
	factionID: number | null;
};

export type invFlags = {
	flagID: number;
	flagName: string | null;
	flagText: string | null;
	orderID: number | null;
};

export type invGroups = {
	groupID: number;
	categoryID: number | null;
	groupName: string | null;
	iconID: number | null;
	useBasePrice: boolean | null;
	anchored: boolean | null;
	anchorable: boolean | null;
	fittableNonSingleton: boolean | null;
	published: boolean | null;
};

export type invItems = {
	itemID: number;
	typeID: number;
	ownerID: number;
	locationID: number;
	flagID: number;
	quantity: number;
};

export type invMarketGroups = {
	marketGroupID: number;
	parentGroupID: number | null;
	marketGroupName: string | null;
	description: string | null;
	iconID: number | null;
	hasTypes: boolean | null;
};

export type invMetaGroups = {
	metaGroupID: number;
	metaGroupName: string | null;
	description: string | null;
	iconID: number | null;
};

export type invMetaTypes = {
	typeID: number;
	parentTypeID: number | null;
	metaGroupID: number | null;
};

export type invNames = {
	itemID: number;
	itemName: string;
};

export type invPositions = {
	itemID: number;
	x: number;
	y: number;
	z: number;
	yaw: number | null;
	pitch: number | null;
	roll: number | null;
};

export type invTraits = {
	traitID: number;
	typeID: number | null;
	skillID: number | null;
	bonus: number | null;
	bonusText: string | null;
	unitID: number | null;
};

export type invTypeMaterials = {
	typeID: number;
	materialTypeID: number;
	quantity: number;
};

export type invTypeReactions = {
	reactionTypeID: number;
	input: boolean;
	typeID: number;
	quantity: number | null;
};

export type invTypes = {
	typeID: number;
	groupID: number | null;
	typeName: string | null;
	description: string | null;
	mass: number | null;
	volume: number | null;
	capacity: number | null;
	portionSize: number | null;
	raceID: number | null;
	basePrice: number | null;
	published: boolean | null;
	marketGroupID: number | null;
	iconID: number | null;
	soundID: number | null;
	graphicID: number | null;
};

export type invUniqueNames = {
	itemID: number;
	itemName: string;
	groupID: number | null;
};

export type invVolumes = {
	typeID: number;
	volume: number | null;
};

export type mapCelestialGraphics = {
	celestialID: number;
	heightMap1: number | null;
	heightMap2: number | null;
	shaderPreset: number | null;
	population: boolean | null;
};

export type mapCelestialStatistics = {
	celestialID: number;
	temperature: number | null;
	spectralClass: string | null;
	luminosity: number | null;
	age: number | null;
	life: number | null;
	orbitRadius: number | null;
	eccentricity: number | null;
	massDust: number | null;
	massGas: number | null;
	fragmented: boolean | null;
	density: number | null;
	surfaceGravity: number | null;
	escapeVelocity: number | null;
	orbitPeriod: number | null;
	rotationRate: number | null;
	locked: boolean | null;
	pressure: number | null;
	radius: number | null;
	mass: number | null;
};

export type mapConstellationJumps = {
	fromRegionID: number | null;
	fromConstellationID: number;
	toConstellationID: number;
	toRegionID: number | null;
};

export type mapConstellations = {
	regionID: number | null;
	constellationID: number;
	constellationName: string | null;
	x: number | null;
	y: number | null;
	z: number | null;
	xMin: number | null;
	xMax: number | null;
	yMin: number | null;
	yMax: number | null;
	zMin: number | null;
	zMax: number | null;
	factionID: number | null;
	radius: number | null;
};

export type mapDenormalize = {
	itemID: number;
	typeID: number | null;
	groupID: number | null;
	solarSystemID: number | null;
	constellationID: number | null;
	regionID: number | null;
	orbitID: number | null;
	x: number | null;
	y: number | null;
	z: number | null;
	radius: number | null;
	itemName: string | null;
	security: number | null;
	celestialIndex: number | null;
	orbitIndex: number | null;
};

export type mapJumps = {
	stargateID: number;
	destinationID: number | null;
};

export type mapLandmarks = {
	landmarkID: number;
	landmarkName: string | null;
	description: string | null;
	locationID: number | null;
	x: number | null;
	y: number | null;
	z: number | null;
	iconID: number | null;
};

export type mapLocationScenes = {
	locationID: number;
	graphicID: number | null;
};

export type mapLocationWormholeClasses = {
	locationID: number;
	wormholeClassID: number | null;
};

export type mapRegionJumps = {
	fromRegionID: number;
	toRegionID: number;
};

export type mapRegions = {
	regionID: number;
	regionName: string | null;
	x: number | null;
	y: number | null;
	z: number | null;
	xMin: number | null;
	xMax: number | null;
	yMin: number | null;
	yMax: number | null;
	zMin: number | null;
	zMax: number | null;
	factionID: number | null;
	nebula: number | null;
	radius: number | null;
};

export type mapSolarSystemJumps = {
	fromRegionID: number | null;
	fromConstellationID: number | null;
	fromSolarSystemID: number;
	toSolarSystemID: number;
	toConstellationID: number | null;
	toRegionID: number | null;
};

export type mapSolarSystems = {
	regionID: number | null;
	constellationID: number | null;
	solarSystemID: number;
	solarSystemName: string | null;
	x: number | null;
	y: number | null;
	z: number | null;
	xMin: number | null;
	xMax: number | null;
	yMin: number | null;
	yMax: number | null;
	zMin: number | null;
	zMax: number | null;
	luminosity: number | null;
	border: boolean | null;
	fringe: boolean | null;
	corridor: boolean | null;
	hub: boolean | null;
	international: boolean | null;
	regional: boolean | null;
	constellation: boolean | null;
	security: number | null;
	factionID: number | null;
	radius: number | null;
	sunTypeID: number | null;
	securityClass: string | null;
};

export type mapUniverse = {
	universeID: number;
	universeName: string | null;
	x: number | null;
	y: number | null;
	z: number | null;
	xMin: number | null;
	xMax: number | null;
	yMin: number | null;
	yMax: number | null;
	zMin: number | null;
	zMax: number | null;
	radius: number | null;
};

export type planetSchematics = {
	schematicID: number;
	schematicName: string | null;
	cycleTime: number | null;
};

export type planetSchematicsPinMap = {
	schematicID: number;
	pinTypeID: number;
};

export type planetSchematicsTypeMap = {
	schematicID: number;
	typeID: number;
	quantity: number | null;
	isInput: boolean | null;
};

export type ramActivities = {
	activityID: number;
	activityName: string | null;
	iconNo: string | null;
	description: string | null;
	published: boolean | null;
};

export type ramAssemblyLineStations = {
	stationID: number;
	assemblyLineTypeID: number;
	quantity: number | null;
	stationTypeID: number | null;
	ownerID: number | null;
	solarSystemID: number | null;
	regionID: number | null;
};

export type ramAssemblyLineTypeDetailPerCategory = {
	assemblyLineTypeID: number;
	categoryID: number;
	timeMultiplier: number | null;
	materialMultiplier: number | null;
	costMultiplier: number | null;
};

export type ramAssemblyLineTypeDetailPerGroup = {
	assemblyLineTypeID: number;
	groupID: number;
	timeMultiplier: number | null;
	materialMultiplier: number | null;
	costMultiplier: number | null;
};

export type ramAssemblyLineTypes = {
	assemblyLineTypeID: number;
	assemblyLineTypeName: string | null;
	description: string | null;
	baseTimeMultiplier: number | null;
	baseMaterialMultiplier: number | null;
	baseCostMultiplier: number | null;
	volume: number | null;
	activityID: number | null;
	minCostPerHour: number | null;
};

export type ramInstallationTypeContents = {
	installationTypeID: number;
	assemblyLineTypeID: number;
	quantity: number | null;
};

export type skinLicense = {
	licenseTypeID: number;
	duration: number | null;
	skinID: number | null;
};

export type skinMaterials = {
	skinMaterialID: number;
	displayNameID: number | null;
	materialSetID: number | null;
};

export type skinShip = {
	skinID: number | null;
	typeID: number | null;
	id: number;
};

export type skins = {
	skinID: number;
	internalName: string | null;
	skinMaterialID: number | null;
};

export type staOperationServices = {
	operationID: number;
	serviceID: number;
};

export type staOperations = {
	activityID: number | null;
	operationID: number;
	operationName: string | null;
	description: string | null;
	fringe: number | null;
	corridor: number | null;
	hub: number | null;
	border: number | null;
	ratio: number | null;
	caldariStationTypeID: number | null;
	minmatarStationTypeID: number | null;
	amarrStationTypeID: number | null;
	gallenteStationTypeID: number | null;
	joveStationTypeID: number | null;
};

export type staServices = {
	serviceID: number;
	serviceName: string | null;
	description: string | null;
};

export type staStationTypes = {
	stationTypeID: number;
	dockEntryX: number | null;
	dockEntryY: number | null;
	dockEntryZ: number | null;
	dockOrientationX: number | null;
	dockOrientationY: number | null;
	dockOrientationZ: number | null;
	operationID: number | null;
	officeSlots: number | null;
	reprocessingEfficiency: number | null;
	conquerable: boolean | null;
};

export type staStations = {
	stationID: bigint;
	security: number | null;
	dockingCostPerVolume: number | null;
	maxShipVolumeDockable: number | null;
	officeRentalCost: number | null;
	operationID: number | null;
	stationTypeID: number | null;
	corporationID: number | null;
	solarSystemID: number | null;
	constellationID: number | null;
	regionID: number | null;
	stationName: string | null;
	x: number | null;
	y: number | null;
	z: number | null;
	reprocessingEfficiency: number | null;
	reprocessingStationsTake: number | null;
	reprocessingHangarFlag: number | null;
};

export type translationTables = {
	sourceTable: string;
	destinationTable: string | null;
	translatedKey: string;
	tcGroupID: number | null;
	tcID: number | null;
};

export type trnTranslationColumns = {
	tcGroupID: number | null;
	tcID: number;
	tableName: string;
	columnName: string;
	masterID: string | null;
};

export type trnTranslationLanguages = {
	numericLanguageID: number;
	languageID: string | null;
	languageName: string | null;
};

export type trnTranslations = {
	tcID: number;
	keyID: number;
	languageID: string;
	text: string;
};

export type warCombatZoneSystems = {
	solarSystemID: number;
	combatZoneID: number | null;
};

export type warCombatZones = {
	combatZoneID: number;
	combatZoneName: string | null;
	factionID: number | null;
	centerSystemID: number | null;
	description: string | null;
};
